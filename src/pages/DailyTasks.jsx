import React, { useState } from 'react';
import { Card, Button, Form, Image, Collapse } from 'react-bootstrap';
import TomatIcon from '../assets/images/icons/Tomat.png';
import BayamIcon from '../assets/images/icons/Bayam.png';
import DaunBawangIcon from '../assets/images/icons/DaunBawang.png';
import BawangIcon from '../assets/images/icons/Bawang.png';
import BellIcon from '../assets/images/icons/Bell.svg';
import { FaCaretDown } from 'react-icons/fa';

const DailyTasks = () => {
  const [openTomat, setOpenTomat] = useState(false);
  const [openBayam, setOpenBayam] = useState(false);
  const [openDaunBawang, setOpenDaunBawang] = useState(false);
  const [openBawang, setOpenBawang] = useState(false);

  const [activeButton, setActiveButton] = useState({
    tomat: 'berjalan',
    bayam: 'berjalan',
    daunBawang: 'berjalan',
    bawang: 'berjalan'
  });

  const [checkedTasks, setCheckedTasks] = useState({
    tomat: { penyiraman: false, pemupukan: false, pangkas: false, cek: false },
    bayam: { penyiraman: false, pemupukan: false, pangkas: false, cek: false },
    daunBawang: { penyiraman: false, pemupukan: false, pangkas: false, cek: false },
    bawang: { penyiraman: false, pemupukan: false, pangkas: false, cek: false }
  });

  const handleButtonClick = (plant, button) => {
    setActiveButton((prevState) => ({
      ...prevState,
      [plant]: prevState[plant] === button ? '' : button
    }));
  };

  const handleTaskCheck = (plant, task) => {
    setCheckedTasks((prevState) => ({
      ...prevState,
      [plant]: {
        ...prevState[plant],
        [task]: !prevState[plant][task]
      }
    }));
  };

  const renderTasks = (plant) => {
    const tasks = {
      penyiraman: 'Penyiraman Rutin',
      pemupukan: 'Pemupukan Mingguan',
      pangkas: 'Pangkas Daun Tua',
      cek: 'Cek Hama'
    };

    return Object.keys(tasks).map((taskKey) => (
      <Form.Check
        key={taskKey}
        type="checkbox"
        id={`${taskKey}-${plant}`}
        name={plant}
        label={tasks[taskKey]}
        className="mb-2"
        style={{ color: '#661599' }}
        checked={checkedTasks[plant][taskKey]}
        onChange={() => handleTaskCheck(plant, taskKey)}
      />
    ));
  };

  const renderFilteredTasks = (plant) => {
    const tasks = {
      penyiraman: 'Penyiraman Rutin',
      pemupukan: 'Pemupukan Mingguan',
      pangkas: 'Pangkas Daun Tua',
      cek: 'Cek Hama'
    };

    return Object.keys(tasks)
      .filter((taskKey) =>
        activeButton[plant] === 'berjalan'
          ? !checkedTasks[plant][taskKey]
          : checkedTasks[plant][taskKey]
      )
      .map((taskKey) => (
        <Form.Check
          key={taskKey}
          type="checkbox"
          id={`${taskKey}-${plant}`}
          name={plant}
          label={tasks[taskKey]}
          className="mb-2"
          style={{ color: '#661599' }}
          checked={checkedTasks[plant][taskKey]}
          onChange={() => handleTaskCheck(plant, taskKey)}
        />
      ));
  };

  return (
    <main className="p-4 grayBg fontPoppins" style={{ width: '78%', height: '100vh' }}>
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold">Daftar Tugas</h1>
          <p className="text-muted">Kamu memiliki 16 tugas bulan ini 👍</p>
        </div>
        <img src={BellIcon} alt="Bell Icon" className="text-primary fs-4" style={{ width: '30px' }} />
      </header>
      <section>
        {['tomat', 'bayam', 'daunBawang', 'bawang'].map((plant) => (
          <Card className="mb-4 shadow" style={{ border: 'none' }} key={plant}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <Image
                    src={{ tomat: TomatIcon, bayam: BayamIcon, daunBawang: DaunBawangIcon, bawang: BawangIcon }[plant]}
                    alt={`${plant} icon`}
                    className="me-3"
                    style={{ width: '70px', borderRadius: '10px' }}
                  />
                  <h4 className="fw-bold" style={{ textTransform: 'capitalize' }}>{plant}</h4>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant={activeButton[plant] === 'berjalan' ? 'primary' : 'light'}
                    className="me-2"
                    style={{
                      backgroundColor: activeButton[plant] === 'berjalan' ? '#661599' : 'white',
                      borderColor: '#661599',
                      color: activeButton[plant] === 'berjalan' ? 'white' : '#661599'
                    }}
                    onClick={() => handleButtonClick(plant, 'berjalan')}
                  >
                    Berjalan
                  </Button>
                  <Button
                    variant={activeButton[plant] === 'selesai' ? 'primary' : 'light'}
                    className="me-2"
                    style={{
                      backgroundColor: activeButton[plant] === 'selesai' ? '#661599' : 'white',
                      borderColor: '#661599',
                      color: activeButton[plant] === 'selesai' ? 'white' : '#661599'
                    }}
                    onClick={() => handleButtonClick(plant, 'selesai')}
                  >
                    Selesai
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => {
                      if (plant === 'tomat') setOpenTomat(!openTomat);
                      if (plant === 'bayam') setOpenBayam(!openBayam);
                      if (plant === 'daunBawang') setOpenDaunBawang(!openDaunBawang);
                      if (plant === 'bawang') setOpenBawang(!openBawang);
                    }}
                    aria-controls={`${plant}-collapse`}
                    aria-expanded={openTomat || openBayam || openDaunBawang || openBawang}
                  >
                    <FaCaretDown style={{ color: '#661599' }} />
                  </Button>
                </div>
              </div>
              <Collapse in={openTomat || openBayam || openDaunBawang || openBawang}>
                <div id={`${plant}-collapse`}>
                  <Form>
                    {renderFilteredTasks(plant)}
                  </Form>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default DailyTasks;

import React, { useState, useEffect } from "react";
import { Card, Button, Form, Image, Collapse } from "react-bootstrap";
import TomatIcon from "../assets/images/icons/Tomat.png";
import BayamIcon from "../assets/images/icons/Bayam.png";
import DaunBawangIcon from "../assets/images/icons/DaunBawang.png";
import BawangIcon from "../assets/images/icons/Bawang.png";
import { FaCaretDown } from "react-icons/fa";
import Notif from "../components/Notif";

const DailyTasks = () => {
  const [openTomat, setOpenTomat] = useState(false);
  const [openBayam, setOpenBayam] = useState(false);
  const [openDaunBawang, setOpenDaunBawang] = useState(false);
  const [openBawang, setOpenBawang] = useState(false);

  const [activeButton, setActiveButton] = useState({
    tomat: "berjalan",
    bayam: "berjalan",
    daunBawang: "berjalan",
    bawang: "berjalan",
  });

  // Tambahkan state untuk menyimpan waktu data dummy
  const [taskCompletionTimes, setTaskCompletionTimes] = useState({
    tomat: {
      penyiraman: null,
      pemupukan: null,
      pangkas: null,
      cek: null
    },
    bayam: {
      penyiraman: null,
      pemupukan: null,
      pangkas: null,
      cek: null
    },
    daunBawang: {
      penyiraman: null,
      pemupukan: null,
      pangkas: null,
      cek: null
    },
    bawang: {
      penyiraman: null,
      pemupukan: null,
      pangkas: null,
      cek: null
    }
  });

  const [checkedTasks, setCheckedTasks] = useState({
    tomat: { 
      penyiraman: { checked: false, checkedAt: null },
      pemupukan: { checked: false, checkedAt: null },
      pangkas: { checked: false, checkedAt: null },
      cek: { checked: false, checkedAt: null }
    },
    bayam: { 
      penyiraman: { checked: false, checkedAt: null },
      pemupukan: { checked: false, checkedAt: null },
      pangkas: { checked: false, checkedAt: null },
      cek: { checked: false, checkedAt: null }
    },
    daunBawang: { 
      penyiraman: { checked: false, checkedAt: null },
      pemupukan: { checked: false, checkedAt: null },
      pangkas: { checked: false, checkedAt: null },
      cek: { checked: false, checkedAt: null }
    },
    bawang: { 
      penyiraman: { checked: false, checkedAt: null },
      pemupukan: { checked: false, checkedAt: null },
      pangkas: { checked: false, checkedAt: null },
      cek: { checked: false, checkedAt: null }
    }
  });

  // Fungsi untuk menambahkan waktu data dummy
  const addDummyCompletionTime = (plant, task) => {
    const now = new Date();
    
    // Contoh data dummy: waktu selesai berbeda untuk setiap tugas
    const dummyCompletionTimes = {
      tomat: {
        penyiraman: new Date(now.getTime() - 25 * 60 * 60 * 1000), // 25 jam lalu
        pemupukan: new Date(now.getTime() - 20 * 60 * 60 * 1000), // 20 jam lalu
        pangkas: new Date(now.getTime() - 22 * 60 * 60 * 1000), // 22 jam lalu
        cek: new Date(now.getTime() - 26 * 60 * 60 * 1000) // 26 jam lalu
      },
      bayam: {
        penyiraman: new Date(now.getTime() - 23 * 60 * 60 * 1000), // 23 jam lalu
        pemupukan: new Date(now.getTime() - 21 * 60 * 60 * 1000), // 21 jam lalu
        pangkas: new Date(now.getTime() - 19 * 60 * 60 * 1000), // 19 jam lalu
        cek: new Date(now.getTime() - 24 * 60 * 60 * 1000) // 24 jam lalu
      },
      // Tambahhan data dummy untuk tanaman lain
      daunBawang: {
        penyiraman: new Date(now.getTime() - 22 * 60 * 60 * 1000),
        pemupukan: new Date(now.getTime() - 20 * 60 * 60 * 1000),
        pangkas: new Date(now.getTime() - 23 * 60 * 60 * 1000),
        cek: new Date(now.getTime() - 25 * 60 * 60 * 1000)
      },
      bawang: {
        penyiraman: new Date(now.getTime() - 21 * 60 * 60 * 1000),
        pemupukan: new Date(now.getTime() - 19 * 60 * 60 * 1000),
        pangkas: new Date(now.getTime() - 24 * 60 * 60 * 1000),
        cek: new Date(now.getTime() - 22 * 60 * 60 * 1000)
      }
    };

    setTaskCompletionTimes(prev => ({
      ...prev,
      [plant]: {
        ...prev[plant],
        [task]: dummyCompletionTimes[plant][task]
      }
    }));

    return dummyCompletionTimes[plant][task];
  };

  useEffect(() => {
    const checkTaskCompletion = () => {
      const now = new Date();
      let updatedActiveButton = { ...activeButton };
      let needsUpdate = false;

      Object.keys(checkedTasks).forEach(plant => {
        let allTasksCompleted = true;
        
        Object.keys(checkedTasks[plant]).forEach(task => {
          // Jika tugas belum selesai, lewati
          if (!checkedTasks[plant][task].checked) {
            allTasksCompleted = false;
            return;
          }

          // Dapatkan waktu dummy atau waktu sebenarnya
          const completionTime = 
            taskCompletionTimes[plant][task] || 
            addDummyCompletionTime(plant, task);

          const hoursDifference = (now - completionTime) / (1000 * 60 * 60);

          // Jika sudah lebih dari 24 jam
          if (hoursDifference >= 24) {
            // Tandai tugas sebagai selesai
            checkedTasks[plant][task].checked = true;
          } else {
            // Jika ada tugas yang belum mencapai 24 jam, tandai bahwa tidak semua tugas selesai
            allTasksCompleted = false;
          }
        });

        // Jika semua tugas sudah selesai, pindahkan ke tab selesai
        if (allTasksCompleted) {
          updatedActiveButton[plant] = 'selesai';
          needsUpdate = true;
        }
      });

      // Update active button jika ada perubahan
      if (needsUpdate) {
        setActiveButton(updatedActiveButton);
      }
    };

    const intervalId = setInterval(checkTaskCompletion, 60000); // Periksa setiap menit

    return () => clearInterval(intervalId);
  }, [checkedTasks, taskCompletionTimes]);

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
        [task]: {
          checked: !prevState[plant][task].checked,
          checkedAt: !prevState[plant][task].checked ? new Date() : null
        }
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
        activeButton[plant] === "berjalan"
          ? !checkedTasks[plant][taskKey].checked
          : checkedTasks[plant][taskKey].checked
      )
      .map((taskKey) => (
        <Form.Check
          key={taskKey}
          type="checkbox"
          id={`${taskKey}-${plant}`}
          name={plant}
          label={tasks[taskKey]}
          className="mb-2 custom-checkbox"
          style={{ 
            color: "#661599",
          }}
          checked={checkedTasks[plant][taskKey].checked}
          onChange={() => handleTaskCheck(plant, taskKey)}
        />
      ));
  };

  return (
    <div
      className="daily-task grayBg d-flex flex-column align-items-start justify-content-start"
      style={{
        width: "calc(100% - 250px)",
        height: "100vh",
        overflowY: "auto",
        marginLeft: "300px" 
      }}>
      <div
        className="d-flex flex-column flex-sm-row p-5 align-items-center justify-content-between"
        style={{ width: "100%", height: "15vh" }}>
        <div className="d-flex flex-column align-items-start">
          <h1 className="fontPoppins fw-bold mb-0">Tugas Harian</h1>
          <p className="mb-0 mt-2">
            Kamu memiliki <strong style={{ color: "#611599" }}>16 tugas</strong>{" "}
            bulan ini!
          </p>
        </div>
        <Notif className="ms-auto" />
      </div>

      <section className="mt-4" style={{ width: "100%" }}>
        {["tomat", "bayam", "daunBawang", "bawang"].map((plant) => (
          <Card
            className="mb-4 shadow"
            style={{ border: "none", width: "100%" }}
            key={plant}>
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
    </div>
  );
};

export default DailyTasks;
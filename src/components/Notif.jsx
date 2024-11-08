import React, { useState } from "react";
import IconBell from "../assets/images/icons/Bell.svg";

const Notif = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Ada komentar baru di video Anda!", read: false },
    { id: 2, message: "Video Anda sudah mencapai 1000 view!", read: false },
    { id: 3, message: "Ada komentar baru di video Anda!", read: false },
    { id: 4, message: "Video Anda sudah mencapai 1000 view!", read: false },
    { id: 5, message: "Video Anda sudah mencapai 1000 view!", read: false },
  ]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredNotif, setHoveredNotif] = useState(null); // Track yang sedang di-hover
  const [clickedNotif, setClickedNotif] = useState(null); // Track yang sedang di-click

  // Menandai notifikasi sebagai sudah dibaca
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  // Mengontrol tampilan dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Fungsi menangani klik pada notifikasi
  const handleMouseDown = (id) => {
    setClickedNotif(id); // Menandai notifikasi yang diklik
  };

  const handleMouseUp = () => {
    setClickedNotif(null); // Mengembalikan state setelah klik selesai
  };

  const handleMouseLeave = () => {
    if (!clickedNotif) {
      setHoveredNotif(null); // Menghapus state hover jika bukan dalam status klik
    }
  };

  const handleMouseEnter = (id) => {
    if (clickedNotif !== id) {
      setHoveredNotif(id); // Menandai notifikasi yang sedang di-hover jika tidak diklik
    }
  };

  return (
    <div className="position-relative">
      <button
        className="d-flex align-items-center justify-content-center border-0 bg-transparent"
        onClick={toggleDropdown}
      >
        <img
          src={IconBell}
          style={{ width: "30px", aspectRatio: "1/1" }}
          alt="Notifikasi"
        />
        {notifications.filter((notif) => !notif.read).length > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-1">
            {notifications.filter((notif) => !notif.read).length}
          </span>
        )}
      </button>

      {showDropdown && (
        <div
          className="dropdown-menu show position-absolute mt-2"
          style={{
            width: "300px", 
            left: "-280px", 
            top: "35px",    
            maxHeight: "300px", 
            overflowY: "auto", 
          }}
        >
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`dropdown-item ${notification.read ? "" : "bg-light"}`}
                onClick={() => markAsRead(notification.id)} // Menandai sebagai sudah dibaca
                onMouseDown={() => handleMouseDown(notification.id)} // Saat mouse ditekan
                onMouseUp={handleMouseUp} // Saat mouse dilepas
                onMouseEnter={() => handleMouseEnter(notification.id)} // Saat mouse masuk
                onMouseLeave={handleMouseLeave} // Saat mouse keluar
                style={{
                  padding: "10px 15px", 
                  cursor: "pointer", 
                  fontSize: "14px",    
                  borderRadius: "8px", 
                  width: "auto", 
                  whiteSpace: "nowrap", 
                  overflow: "hidden", 
                  textOverflow: "ellipsis",
                  backgroundColor:
                    clickedNotif === notification.id
                      ? "#E6E6FA" // Lavender saat klik
                      : hoveredNotif === notification.id
                      ? "#E6E6FA" // Lavender saat hover
                      : "", // Default background
                  transition: "background-color 0.3s", 
                }}
              >
                {notification.message}
              </div>
            ))
          ) : (
            <div
              className="dropdown-item text-muted"
              style={{ padding: "15px", textAlign: "center", color: "#888" }}
            >
              Tidak ada notifikasi baru
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notif;

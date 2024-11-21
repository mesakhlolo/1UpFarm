import React, { useState } from "react";
import IconBell from "../assets/images/icons/Bell.svg";
import Bayam from "../assets/images/icons/Bayam.png"; 

const Notif = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Jangan lupa untuk menyiram tanaman hari ini",
      detail: "Bayam - 1 Minggu",
      read: false,
      image: Bayam,
    },
    {
      id: 2,
      message: "Tanaman Anda terlihat sehat hari ini",
      detail: "Bayam - 2 Hari",
      read: false,
      image: Bayam,
    },
  ]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Menandai notifikasi sebagai sudah dibaca
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Mengontrol tampilan dropdown
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="position-relative">
      {/* Tombol Notifikasi */}
      <button
        className="d-flex align-items-center justify-content-center border-0 bg-transparent"
        onClick={toggleDropdown}
        style={{ position: "relative" }}>
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

      {/* Dropdown Notifikasi */}
      {showDropdown && (
        <div
          className="notification-card position-absolute mt-2"
          style={{
            width: "400px",
            left: "-350px",
            top: "35px",
            maxHeight: "400px",
            overflowY: "auto",
            backgroundColor: "#CDA7FF",
            borderRadius: "8px",
            padding: "15px",
            zIndex: 1000,
          }}>
          <h5 style={{ color: "Black" }}>Pemberitahuan</h5>
          <div className="notif">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="notif-body mb-2"
                  onClick={() => markAsRead(notification.id)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: notification.read ? "#A155D1" : "#661599",
                    padding: "12px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "background-color 0.3s",
                  }}>
                  {notification.image && (
                    <img
                      src={notification.image}
                      alt="Notification"
                      height="50"
                      width="50"
                      style={{ borderRadius: "8px" }}
                    />
                  )}
                  <div style={{ color: "white" }}>
                    <p className="mb-1" style={{ margin: 0 }}>
                      {notification.message}
                    </p>
                    {notification.detail && (
                      <small>{notification.detail}</small>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div
                className="dropdown-item text-muted"
                style={{ padding: "15px", textAlign: "center", color: "#888" }}>
                Tidak ada notifikasi baru
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notif;

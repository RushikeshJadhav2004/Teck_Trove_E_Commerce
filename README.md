# 🛒 TechTrove - E-commerce Web Application

TechTrove is a full-stack E-commerce web application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). It provides a modern online store experience with dynamic product listings, cart functionality, user authentication, and order management.

---

## 📸 Screenshots

> *(Add actual screenshots in the project directory and link them like below)*

### 🏠 Homepage
![Homepage](https://github.com/user-attachments/assets/8cebf3be-9ad0-4253-8804-41833d5f22f5)

### 🛍️ Product Page
![Product Page](https://github.com/user-attachments/assets/203f4ac1-0d51-4e16-a450-68a3a81e56ee)

### 🛒 Cart
![Cart](https://github.com/user-attachments/assets/6a5d55f3-6e6d-44d5-ac39-926c2acb632e)

### ⚙️ Admin Panel
![Admin Panel](https://github.com/user-attachments/assets/338dfb60-9f69-423d-b848-9132b5b0d759)

---

## 🚀 Features

- ✅ Fully functional product catalog
- 🔍 Product filtering & search
- 🛒 Add to cart & remove from cart
- 🔐 User authentication (Login/Register)
- 👨‍💼 Admin dashboard (add/edit/delete products)
- 💳 Payment integration (optional)
- 📱 Fully responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- Toast Notifications

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication

---

## 📁 Project Structure

```bash
TechTrove/
├── client/                  # Frontend (React)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
├── server/                  # Backend (Node + Express)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .env
├── README.md
└── package.json
```

##Setup Instructions

*Prerequisites*

Node.js
MongoDB installed locally or MongoDB Atlas

## Local Development
*Clone the repo:*
```
git clone https://github.com/your-username/techtrove.git
cd techtrove
```

*Setup server:*
```
cd server
npm install
npm run dev

```

*Configure .env in server/:*
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

##Deployment

*Frontend: Vercel / Netlify*
*Backend: Render / Cyclic / Railway*
*Database: MongoDB Atlas*

**Future Enhancements**

✅ Payment gateway integration (Razorpay/Stripe)
✅ Product reviews & ratings
✅ Wishlist functionality
✅ Email order notifications
✅ Dark mode UI


## 🧑‍🎓 Author

**Rishii Jadhav**  
🔗 [LinkedIn](https://www.linkedin.com/in/rushikeshjadhav2004)  
🐙 [GitHub](https://github.com/RushikeshJadhav2004)


# License
This project is open source and available under the MIT License.

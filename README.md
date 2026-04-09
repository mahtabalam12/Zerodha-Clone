# Zerotha Clone

A full-stack trading application clone inspired by Zerodha, built with React, Node.js, and MongoDB.

## Features

- **Frontend**: Landing page with modern UI
- **Dashboard**: Trading interface with holdings, orders, and positions
- **Backend**: REST API with MongoDB database

## Tech Stack

- **Frontend**: React.js
- **Dashboard**: React.js with Charts
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, Material-UI

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/mahtabalam12/Zerodha-Clones.git
cd Zerotha-Clones
```

2. Install dependencies for each module:

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

**Dashboard:**
```bash
cd ../dashboard
npm install
```

3. Start the applications:

**Backend (Terminal 1):**
```bash
cd backend
npm start
```
Runs on: `http://localhost:3002`

**Frontend (Terminal 2):**
```bash
cd ../frontend
npm start
```
Runs on: `http://localhost:3000`

**Dashboard (Terminal 3):**
```bash
cd ../dashboard
npm start
```
Runs on: `http://localhost:3001`

## API Endpoints

- `GET /allHoldings` - Get all holdings
- `GET /allPositions` - Get all positions
- `POST /newOrder` - Create new order

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

This project is for educational purposes only.
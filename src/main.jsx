import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from "./Greeting.jsx"
import FoodCard from './FoodCard.jsx'
import Group from "./Group.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FoodCard />
    <Group />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/pages/Login.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './components/pages/Dashboard.jsx'
import User from './components/pages/User.jsx'
import Enquiry from './components/pages/Enquiry.jsx'
import Newsletter from './components/pages/Newsletter.jsx'
import ColorAdd from './components/pages/ColorAdd.jsx'
import ColorView from './components/pages/ColorView.jsx'
import MaterialAdd from './components/pages/MaterialAdd.jsx'
import MaterialView from './components/pages/MaterialView.jsx'
import ParentCateAdd from './components/pages/ParentCateAdd.jsx'
import ParentCateView from './components/pages/ParentCateView.jsx'
import SubCateAdd from './components/pages/SubCateAdd.jsx'
import SubCateView from './components/pages/SubCateView.jsx'
import SubSubCateAdd from './components/pages/SubSubCateAdd.jsx'
import SubSubCateView from './components/pages/SubSubCateView.jsx'
import ProductAdd from './components/pages/ProductAdd.jsx'
import ProductView from './components/pages/ProductView.jsx'
import WhyChooseUsAdd from './components/pages/WhyChooseUsAdd.jsx'
import WhyChooseUsView from './components/pages/WhyChooseUsView.jsx'
import Orders from './components/pages/Orders.jsx'
import SliderAdd from './components/pages/SliderAdd.jsx'
import SliderView from './components/pages/SliderView.jsx'
import CountryAdd from './components/pages/CountryAdd.jsx'
import CountryView from './components/pages/CountryView.jsx'
import TestimonialAdd from './components/pages/TestimonialAdd.jsx'
import TestimonialView from './components/pages/TestimonialView.jsx'
import FaqAdd from './components/pages/FaqAdd.jsx'
import FaqView from './components/pages/FaqView.jsx'
import Profile from './components/pages/Profile.jsx'
import CompanyProfile from './components/pages/CompanyProfile.jsx'
import AppLayout from './AppLayout.jsx'






// https://monsta-static-admin-panel.vercel.app/color/add





createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />


      <Route element={<AppLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='/user' element={<User />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/color'>
          <Route path='add' element={<ColorAdd />} />
          <Route path='view' element={<ColorView />} />
          <Route path='update/:id?' element={<ColorAdd />} />
        </Route>
        <Route path='/material'>
          <Route path='add' element={<MaterialAdd />} />
          <Route path='view' element={<MaterialView />} />
          <Route path='update/:id?' element={<MaterialAdd />} />
        </Route>
        <Route path='/category'>
          <Route path='add' element={<ParentCateAdd />} />
          <Route path='view' element={<ParentCateView />} />
          <Route path='update/:id?' element={<ParentCateAdd />} />
          <Route path='sub-category'>
            <Route path='add' element={<SubCateAdd />} />
            <Route path='view' element={<SubCateView />} />
            <Route path='update/:id?' element={<SubCateAdd />} />
          </Route>
          <Route path='sub-sub-category'>
            <Route path='add' element={<SubSubCateAdd />} />
            <Route path='view' element={<SubSubCateView />} />
          </Route>
        </Route>
        <Route path='/product'>
          <Route path='add' element={<ProductAdd />} />
          <Route path='view' element={<ProductView />} />
        </Route>
        <Route path='/why-choose-use'>
          <Route path='add' element={<WhyChooseUsAdd />} />
          <Route path='view' element={<WhyChooseUsView />} />
        </Route>
        <Route path='/order'>
          <Route path='view' element={<Orders />} />
        </Route>
        <Route path='/slider'>
          <Route path='add' element={<SliderAdd />} />
          <Route path='view' element={<SliderView />} />
        </Route>
        <Route path='/country'>
          <Route path='add' element={<CountryAdd />} />
          <Route path='view' element={<CountryView />} />
          <Route path='update/:id?' element={<CountryAdd />} />
        </Route>
        <Route path='/testimonial'>
          <Route path='add' element={<TestimonialAdd />} />
          <Route path='view' element={<TestimonialView />} />
        </Route>
        <Route path='/faq'>
          <Route path='add' element={<FaqAdd />} />
          <Route path='view' element={<FaqView />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='/company-profile' element={<CompanyProfile />} />
      </Route>


    </Routes>
  </BrowserRouter>
)

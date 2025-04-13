import { useEffect, useLayoutEffect, useState , useRef} from 'react'
import './App.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Foter from './Components/Footer/Foter.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home.jsx'

import LikePage from './Components/Likepage/LikePage.jsx'
import Cart from './Components/Cartpage/Cart.jsx';
import Payment from './Components/Cartpage/Payment.jsx';
import Itemshortview from './Components/itemshortview/Itemshortview.jsx';
import Itemoverview from './Components/itemoverview/Itemoverview.jsx';
import Viewallitem from './Components/viewallitem/Viewallitem.jsx';
import Subsection from './Components/Subsections/Subsection.jsx';
import Navbarsection from './Components/NavbarsectionSticky/Navbarsection.jsx';

function App() {
   const [arr,setarr]=useState([
          {
              id:1,
              isforsale:true,
              seller:'vasanth&co',
              brand:'',
              sellerdetail:[{
                sellername:'vasanth&co',
                address:'Thiru.vi.ka.nagar',
                village:'nasiyanur',
                city:'Erode',
                state:'Tamil Nadu',
                phonenum:'8015570575',
              }],
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:15,
              arraivaltimeindays:2,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:true,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:1,
                  title:'weddd',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF'],
                  dateofcomment:'30/03/2025'
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF'],
                  dateofcomment:'30/03/2025'
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF'],
                  dateofcomment:'30/03/2025'
                }
              ],
              iteminfo:[
               /*  minimum of 77 words please for each description of content*/
                {
                  
                  infotitle:'Description',
                  description:'Experience seamless connectivity and high-quality audio with Apple AirPods, designed to deliver an immersive and effortless listening experience. With crystal-clear sound, deep bass, and noise isolation, these wireless earbuds provide an unparalleled audio experience for music, calls, and voice assistants. The ergonomic, lightweight design ensures all-day comfort, while the advanced sensors and intuitive touch controls make managing music and calls easier than ever.'
                },
                {
                
                  infotitle:'Shipping & Returns',
                  description:'We are committed to providing a seamless shopping experience with fast and reliable shipping. Orders are processed within 24-48 hours and shipped via trusted carriers to ensure timely delivery. Estimated delivery times vary based on location and selected shipping method, with tracking information provided for every order.If you are not completely satisfied with your purchase, we offer a hassle-free return policy. Items can be returned within [X] days of delivery in their original condition and packaging for a full refund or exchange.'
                },
                {
                
                  infotitle:'Return Policies',
                  description:'We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items can be returned within [X] days of delivery, provided they are in their original condition, unused, and include all accessories and packaging. Once we receive and inspect the returned item, a full refund or exchange will be processed within [X] business days. Please note that certain items may not be eligible for return due to hygiene or customization reasons. If you have any questions or need assistance with your return, our customer support team is always ready to help.'
                }
              ],
              itemimg:[
                {
                  mainimgarr:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720',
                  subimg:['https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720','https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600']
                }
              ],
              choiceofitem:[
                {
                  nameforimages:'choiseofprod',
                  numberofchoice:18,
                  mainchoiceimg:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_3.jpg?v=1721289424&width=720',
                  diffimgone:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_5.jpg?v=1721289424&width=720',
                  diffimgtwo:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_8.jpg?v=1721289424',
                  diffimgthree:'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfour:'https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfive:'https://images.unsplash.com/photo-1629367494173-c78a56567877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgsix:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgseven:'https://images.unsplash.com/photo-1628773193539-ad29c647c071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgeight:'https://images.unsplash.com/photo-1603898037341-52a9292eddd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'
                }
              ],
              producthighlight:[
                {
                  highlight:'Innovative Design',
                  imgone:'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  imgtwo:'https://images.unsplash.com/photo-1607087365600-e7bf50d0b226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  secondaryhighlightone:{
                    mainhighlight:'Water Resistent',
                    subhighlight:'Water Depth test of 100m.'
                  },
                  secondaryhighlighttwo:{
                    mainhighlight:'UnBrokable',
                    subhighlight:'1000 Drop Test',
                  },
                  secondaryhighlightthree:{
                    mainhighlight:'Ear Fit',
                    subhighlight:'Professional Building',
                  },
                  prodsmallreview:[
                    {
                      smallrevid:1,
                      starrate:3,
                      reviewinsmall:'Good Build quality -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    },
                    {
                      smallrevid:2,
                      starrate:1,
                      reviewinsmall:'Best Bought -',
                      reviewerofsamll:'Yash',
                      userimage:'https://images.unsplash.com/photo-1584635234347-ce88034d9501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'  
                    },
                    {
                      smallrevid:3,
                      starrate:5,
                      reviewinsmall:'Good Bass -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600'

                    }
                  ]     
                }
              ],
              qualityassuringimages:
                {
                  
                  qualimgone:'https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
                  qualimgtwo:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
                  qualimgthree:'https://images.unsplash.com/photo-1634874257408-94215a587d88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
                  qualimgfour:'https://images.unsplash.com/photo-1616781678220-15abd16b61e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8'
                },
              moreothersellings:{
                oterimgone:'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtwo:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgthree:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfour:'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfive:'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgsix:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgseven:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeight:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgnine:'https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgten:'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeleven:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtweleve:'https://images.unsplash.com/photo-1619008054959-921a896885c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwcm9kdWN0fGVufDB8fDB8fHww'
              }
              
          },
          {
              id:2,
              isforsale:true,
              seller:'vasanth&co',
              brand:'',

              sellerdetail:[{
                sellername:'vasanth&co',
                address:'Thiru.vi.ka.nagar',
                village:'nasiyanur',
                city:'Erode',
                state:'Tamil Nadu',
                phonenum:'8015570575',
              }],
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              arraivaltimeindays:3,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:true,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ],
              iteminfo:[
               /*  minimum of 77 words please for each description of content*/
                {
                  
                  infotitle:'Description',
                  description:'Experience seamless connectivity and high-quality audio with Apple AirPods, designed to deliver an immersive and effortless listening experience. With crystal-clear sound, deep bass, and noise isolation, these wireless earbuds provide an unparalleled audio experience for music, calls, and voice assistants. The ergonomic, lightweight design ensures all-day comfort, while the advanced sensors and intuitive touch controls make managing music and calls easier than ever.'
                },
                {
                
                  infotitle:'Shipping & Returns',
                  description:'We are committed to providing a seamless shopping experience with fast and reliable shipping. Orders are processed within 24-48 hours and shipped via trusted carriers to ensure timely delivery. Estimated delivery times vary based on location and selected shipping method, with tracking information provided for every order.If you are not completely satisfied with your purchase, we offer a hassle-free return policy. Items can be returned within [X] days of delivery in their original condition and packaging for a full refund or exchange.'
                },
                {
                
                  infotitle:'Return Policies',
                  description:'We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items can be returned within [X] days of delivery, provided they are in their original condition, unused, and include all accessories and packaging. Once we receive and inspect the returned item, a full refund or exchange will be processed within [X] business days. Please note that certain items may not be eligible for return due to hygiene or customization reasons. If you have any questions or need assistance with your return, our customer support team is always ready to help.'
                }
              ],
              itemimg:[
                {
                  mainimgarr:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720',
                  subimg:['https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720','https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600']
                }
              ],
              choiceofitem:[
                {
                  nameforimages:'choiseofprod',
                  numberofchoice:18,
                  mainchoiceimg:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_3.jpg?v=1721289424&width=720',
                  diffimgone:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_5.jpg?v=1721289424&width=720',
                  diffimgtwo:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_8.jpg?v=1721289424',
                  diffimgthree:'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfour:'https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfive:'https://images.unsplash.com/photo-1629367494173-c78a56567877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgsix:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgseven:'https://images.unsplash.com/photo-1628773193539-ad29c647c071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgeight:'https://images.unsplash.com/photo-1603898037341-52a9292eddd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'
                }
              ],
              producthighlight:[
                {
                  highlight:'Innovative Design',
                  imgone:'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  imgtwo:'https://images.unsplash.com/photo-1607087365600-e7bf50d0b226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  secondaryhighlightone:{
                    mainhighlight:'Water Resistent',
                    subhighlight:'Water Depth test of 100m.'
                  },
                  secondaryhighlighttwo:{
                    mainhighlight:'UnBrokable',
                    subhighlight:'1000 Drop Test',
                  },
                  secondaryhighlightthree:{
                    mainhighlight:'Ear Fit',
                    subhighlight:'Professional Building',
                  },
                  prodsmallreview:[
                    {
                      smallrevid:1,
                      starrate:3,
                      reviewinsmall:'Good Build quality -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    },
                    {
                      smallrevid:2,
                      starrate:1,
                      reviewinsmall:'Best Bought -',
                      reviewerofsamll:'Yash',
                      userimage:'https://images.unsplash.com/photo-1584635234347-ce88034d9501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'  
                    },
                    {
                      smallrevid:3,
                      starrate:5,
                      reviewinsmall:'Good Bass -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600'

                    }
                  ]     
                }
              ],
              qualityassuringimages:
                {
                  
                  qualimgone:'https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
                  qualimgtwo:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
                  qualimgthree:'https://images.unsplash.com/photo-1634874257408-94215a587d88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
                  qualimgfour:'https://images.unsplash.com/photo-1616781678220-15abd16b61e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8'
                },
              moreothersellings:{
                oterimgone:'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtwo:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgthree:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfour:'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfive:'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgsix:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgseven:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeight:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgnine:'https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgten:'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeleven:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtweleve:'https://images.unsplash.com/photo-1619008054959-921a896885c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwcm9kdWN0fGVufDB8fDB8fHww'
              }

          },
          {
              id:3,
              isforsale:true,
              seller:'vasanth&co',
              brand:'',
              sellerdetail:[{
                sellername:'vasanth&co',
                address:'Thiru.vi.ka.nagar',
                village:'nasiyanur',
                city:'Erode',
                state:'Tamil Nadu',
                phonenum:'8015570575',
              }],
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              arraivaltimeindays:4,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ],
              iteminfo:[
               /*  minimum of 77 words please for each description of content*/
                {
                  
                  infotitle:'Description',
                  description:'Experience seamless connectivity and high-quality audio with Apple AirPods, designed to deliver an immersive and effortless listening experience. With crystal-clear sound, deep bass, and noise isolation, these wireless earbuds provide an unparalleled audio experience for music, calls, and voice assistants. The ergonomic, lightweight design ensures all-day comfort, while the advanced sensors and intuitive touch controls make managing music and calls easier than ever.'
                },
                {
                
                  infotitle:'Shipping & Returns',
                  description:'We are committed to providing a seamless shopping experience with fast and reliable shipping. Orders are processed within 24-48 hours and shipped via trusted carriers to ensure timely delivery. Estimated delivery times vary based on location and selected shipping method, with tracking information provided for every order.If you are not completely satisfied with your purchase, we offer a hassle-free return policy. Items can be returned within [X] days of delivery in their original condition and packaging for a full refund or exchange.'
                },
                {
                
                  infotitle:'Return Policies',
                  description:'We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items can be returned within [X] days of delivery, provided they are in their original condition, unused, and include all accessories and packaging. Once we receive and inspect the returned item, a full refund or exchange will be processed within [X] business days. Please note that certain items may not be eligible for return due to hygiene or customization reasons. If you have any questions or need assistance with your return, our customer support team is always ready to help.'
                }
              ],
              itemimg:[
                {
                  mainimgarr:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720',
                  subimg:['https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720','https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600']
                }
              ],
              choiceofitem:[
                {
                  nameforimages:'choiseofprod',
                  numberofchoice:18,
                  mainchoiceimg:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_3.jpg?v=1721289424&width=720',
                  diffimgone:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_5.jpg?v=1721289424&width=720',
                  diffimgtwo:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_8.jpg?v=1721289424',
                  diffimgthree:'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfour:'https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfive:'https://images.unsplash.com/photo-1629367494173-c78a56567877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgsix:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgseven:'https://images.unsplash.com/photo-1628773193539-ad29c647c071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgeight:'https://images.unsplash.com/photo-1603898037341-52a9292eddd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'
                }
              ],
              producthighlight:[
                {
                  highlight:'Innovative Design',
                  imgone:'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  imgtwo:'https://images.unsplash.com/photo-1607087365600-e7bf50d0b226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  secondaryhighlightone:{
                    mainhighlight:'Water Resistent',
                    subhighlight:'Water Depth test of 100m.'
                  },
                  secondaryhighlighttwo:{
                    mainhighlight:'UnBrokable',
                    subhighlight:'1000 Drop Test',
                  },
                  secondaryhighlightthree:{
                    mainhighlight:'Ear Fit',
                    subhighlight:'Professional Building',
                  },
                  prodsmallreview:[
                    {
                      smallrevid:1,
                      starrate:3,
                      reviewinsmall:'Good Build quality -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    },
                    {
                      smallrevid:2,
                      starrate:1,
                      reviewinsmall:'Best Bought -',
                      reviewerofsamll:'Yash',
                      userimage:'https://images.unsplash.com/photo-1584635234347-ce88034d9501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'  
                    },
                    {
                      smallrevid:3,
                      starrate:5,
                      reviewinsmall:'Good Bass -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600'

                    }
                  ]     
                }
              ],
              qualityassuringimages:
                {
                  
                  qualimgone:'https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
                  qualimgtwo:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
                  qualimgthree:'https://images.unsplash.com/photo-1634874257408-94215a587d88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
                  qualimgfour:'https://images.unsplash.com/photo-1616781678220-15abd16b61e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8'
                },
              moreothersellings:{
                oterimgone:'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtwo:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgthree:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfour:'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfive:'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgsix:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgseven:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeight:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgnine:'https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgten:'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeleven:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtweleve:'https://images.unsplash.com/photo-1619008054959-921a896885c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwcm9kdWN0fGVufDB8fDB8fHww'
              }
          },
          {
              id:4,
              isforsale:true,
              seller:'vasanth&co',
              brand:'Puma',

              sellerdetail:[{
                sellername:'vasanth&co',
                address:'Thiru.vi.ka.nagar',
                village:'nasiyanur',
                city:'Erode',
                state:'Tamil Nadu',
                phonenum:'8015570575',
              }],
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              arraivaltimeindays:6,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:4,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ],
              iteminfo:[
               /*  minimum of 77 words please for each description of content*/
                {
                  
                  infotitle:'Description',
                  description:'Experience seamless connectivity and high-quality audio with Apple AirPods, designed to deliver an immersive and effortless listening experience. With crystal-clear sound, deep bass, and noise isolation, these wireless earbuds provide an unparalleled audio experience for music, calls, and voice assistants. The ergonomic, lightweight design ensures all-day comfort, while the advanced sensors and intuitive touch controls make managing music and calls easier than ever.'
                },
                {
                
                  infotitle:'Shipping & Returns',
                  description:'We are committed to providing a seamless shopping experience with fast and reliable shipping. Orders are processed within 24-48 hours and shipped via trusted carriers to ensure timely delivery. Estimated delivery times vary based on location and selected shipping method, with tracking information provided for every order.If you are not completely satisfied with your purchase, we offer a hassle-free return policy. Items can be returned within [X] days of delivery in their original condition and packaging for a full refund or exchange.'
                },
                {
                
                  infotitle:'Return Policies',
                  description:'We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items can be returned within [X] days of delivery, provided they are in their original condition, unused, and include all accessories and packaging. Once we receive and inspect the returned item, a full refund or exchange will be processed within [X] business days. Please note that certain items may not be eligible for return due to hygiene or customization reasons. If you have any questions or need assistance with your return, our customer support team is always ready to help.'
                }
              ],
              itemimg:[
                {
                  mainimgarr:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720',
                  subimg:['https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720','https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600']
                }
              ],
              choiceofitem:[
                {
                  nameforimages:'choiseofprod',
                  numberofchoice:18,
                  mainchoiceimg:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_3.jpg?v=1721289424&width=720',
                  diffimgone:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_5.jpg?v=1721289424&width=720',
                  diffimgtwo:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_8.jpg?v=1721289424',
                  diffimgthree:'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfour:'https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfive:'https://images.unsplash.com/photo-1629367494173-c78a56567877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgsix:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgseven:'https://images.unsplash.com/photo-1628773193539-ad29c647c071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgeight:'https://images.unsplash.com/photo-1603898037341-52a9292eddd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'
                }
              ],
              producthighlight:[
                {
                  highlight:'Innovative Design',
                  imgone:'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  imgtwo:'https://images.unsplash.com/photo-1607087365600-e7bf50d0b226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  secondaryhighlightone:{
                    mainhighlight:'Water Resistent',
                    subhighlight:'Water Depth test of 100m.'
                  },
                  secondaryhighlighttwo:{
                    mainhighlight:'UnBrokable',
                    subhighlight:'1000 Drop Test',
                  },
                  secondaryhighlightthree:{
                    mainhighlight:'Ear Fit',
                    subhighlight:'Professional Building',
                  },
                  prodsmallreview:[
                    {
                      smallrevid:1,
                      starrate:3,
                      reviewinsmall:'Good Build quality -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    },
                    {
                      smallrevid:2,
                      starrate:1,
                      reviewinsmall:'Best Bought -',
                      reviewerofsamll:'Yash',
                      userimage:'https://images.unsplash.com/photo-1584635234347-ce88034d9501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'  
                    },
                    {
                      smallrevid:3,
                      starrate:5,
                      reviewinsmall:'Good Bass -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600'

                    }
                  ]     
                }
              ],
              qualityassuringimages:
                {
                  
                  qualimgone:'https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
                  qualimgtwo:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
                  qualimgthree:'https://images.unsplash.com/photo-1634874257408-94215a587d88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
                  qualimgfour:'https://images.unsplash.com/photo-1616781678220-15abd16b61e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8'
                },
              moreothersellings:{
                oterimgone:'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtwo:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgthree:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfour:'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfive:'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgsix:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgseven:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeight:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgnine:'https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgten:'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeleven:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtweleve:'https://images.unsplash.com/photo-1619008054959-921a896885c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwcm9kdWN0fGVufDB8fDB8fHww'
              }
          },
          {
              id:5,
              isforsale:true,
              seller:'vasanth&co',
              brand:'',
              sellerdetail:[{
                sellername:'vasanth&co',
                address:'Thiru.vi.ka.nagar',
                village:'nasiyanur',
                city:'Erode',
                state:'Tamil Nadu',
                phonenum:'8015570575',
              }],
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              arraivaltimeindays:4,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt-(this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ],
              iteminfo:[
               /*  minimum of 77 words please for each description of content*/
                {
                  
                  infotitle:'Description',
                  description:'Experience seamless connectivity and high-quality audio with Apple AirPods, designed to deliver an immersive and effortless listening experience. With crystal-clear sound, deep bass, and noise isolation, these wireless earbuds provide an unparalleled audio experience for music, calls, and voice assistants. The ergonomic, lightweight design ensures all-day comfort, while the advanced sensors and intuitive touch controls make managing music and calls easier than ever.'
                },
                {
                
                  infotitle:'Shipping & Returns',
                  description:'We are committed to providing a seamless shopping experience with fast and reliable shipping. Orders are processed within 24-48 hours and shipped via trusted carriers to ensure timely delivery. Estimated delivery times vary based on location and selected shipping method, with tracking information provided for every order.If you are not completely satisfied with your purchase, we offer a hassle-free return policy. Items can be returned within [X] days of delivery in their original condition and packaging for a full refund or exchange.'
                },
                {
                
                  infotitle:'Return Policies',
                  description:'We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items can be returned within [X] days of delivery, provided they are in their original condition, unused, and include all accessories and packaging. Once we receive and inspect the returned item, a full refund or exchange will be processed within [X] business days. Please note that certain items may not be eligible for return due to hygiene or customization reasons. If you have any questions or need assistance with your return, our customer support team is always ready to help.'
                }
              ],
              itemimg:[
                {
                  mainimgarr:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720',
                  subimg:['https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720','https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600']
                }
              ],
              choiceofitem:[
                {
                  nameforimages:'choiseofprod',
                  numberofchoice:18,
                  mainchoiceimg:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_3.jpg?v=1721289424&width=720',
                  diffimgone:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_5.jpg?v=1721289424&width=720',
                  diffimgtwo:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_8.jpg?v=1721289424',
                  diffimgthree:'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfour:'https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfive:'https://images.unsplash.com/photo-1629367494173-c78a56567877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgsix:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgseven:'https://images.unsplash.com/photo-1628773193539-ad29c647c071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgeight:'https://images.unsplash.com/photo-1603898037341-52a9292eddd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'
                }
              ],
              producthighlight:[
                {
                  highlight:'Innovative Design',
                  imgone:'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  imgtwo:'https://images.unsplash.com/photo-1607087365600-e7bf50d0b226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  secondaryhighlightone:{
                    mainhighlight:'Water Resistent',
                    subhighlight:'Water Depth test of 100m.'
                  },
                  secondaryhighlighttwo:{
                    mainhighlight:'UnBrokable',
                    subhighlight:'1000 Drop Test',
                  },
                  secondaryhighlightthree:{
                    mainhighlight:'Ear Fit',
                    subhighlight:'Professional Building',
                  },
                  prodsmallreview:[
                    {
                      smallrevid:1,
                      starrate:3,
                      reviewinsmall:'Good Build quality -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    },
                    {
                      smallrevid:2,
                      starrate:1,
                      reviewinsmall:'Best Bought -',
                      reviewerofsamll:'Yash',
                      userimage:'https://images.unsplash.com/photo-1584635234347-ce88034d9501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'  
                    },
                    {
                      smallrevid:3,
                      starrate:5,
                      reviewinsmall:'Good Bass -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600'

                    }
                  ]     
                }
              ],
              qualityassuringimages:
                {
                  
                  qualimgone:'https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
                  qualimgtwo:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
                  qualimgthree:'https://images.unsplash.com/photo-1634874257408-94215a587d88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
                  qualimgfour:'https://images.unsplash.com/photo-1616781678220-15abd16b61e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8'
                },
              moreothersellings:{
                oterimgone:'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtwo:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgthree:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfour:'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfive:'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgsix:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgseven:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeight:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgnine:'https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgten:'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeleven:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtweleve:'https://images.unsplash.com/photo-1619008054959-921a896885c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwcm9kdWN0fGVufDB8fDB8fHww'
              }
          },
          {
              id:6,
              isforsale:true,
              seller:'vasanth&co',
              brand:'Puma',

              sellerdetail:[{
                sellername:'vasanth&co',
                address:'Thiru.vi.ka.nagar',
                village:'nasiyanur',
                city:'Erode',
                state:'Tamil Nadu',
                phonenum:'8015570575',
              }],
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              availability:0,

              arraivaltimeindays:4,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ],
              iteminfo:[
               /*  minimum of 77 words please for each description of content*/
                {
                  
                  infotitle:'Description',
                  description:'Experience seamless connectivity and high-quality audio with Apple AirPods, designed to deliver an immersive and effortless listening experience. With crystal-clear sound, deep bass, and noise isolation, these wireless earbuds provide an unparalleled audio experience for music, calls, and voice assistants. The ergonomic, lightweight design ensures all-day comfort, while the advanced sensors and intuitive touch controls make managing music and calls easier than ever.'
                },
                {
                
                  infotitle:'Shipping & Returns',
                  description:'We are committed to providing a seamless shopping experience with fast and reliable shipping. Orders are processed within 24-48 hours and shipped via trusted carriers to ensure timely delivery. Estimated delivery times vary based on location and selected shipping method, with tracking information provided for every order.If you are not completely satisfied with your purchase, we offer a hassle-free return policy. Items can be returned within [X] days of delivery in their original condition and packaging for a full refund or exchange.'
                },
                {
                
                  infotitle:'Return Policies',
                  description:'We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items can be returned within [X] days of delivery, provided they are in their original condition, unused, and include all accessories and packaging. Once we receive and inspect the returned item, a full refund or exchange will be processed within [X] business days. Please note that certain items may not be eligible for return due to hygiene or customization reasons. If you have any questions or need assistance with your return, our customer support team is always ready to help.'
                }
              ],
              itemimg:[
                {
                  mainimgarr:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720',
                  subimg:['https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720','https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600']
                }
              ],
              choiceofitem:[
                {
                  nameforimages:'choiseofprod',
                  numberofchoice:18,
                  mainchoiceimg:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_3.jpg?v=1721289424&width=720',
                  diffimgone:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_5.jpg?v=1721289424&width=720',
                  diffimgtwo:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_8.jpg?v=1721289424',
                  diffimgthree:'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfour:'https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfive:'https://images.unsplash.com/photo-1629367494173-c78a56567877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgsix:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgseven:'https://images.unsplash.com/photo-1628773193539-ad29c647c071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgeight:'https://images.unsplash.com/photo-1603898037341-52a9292eddd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'
                }
              ],
              producthighlight:[
                {
                  highlight:'Innovative Design',
                  imgone:'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  imgtwo:'https://images.unsplash.com/photo-1607087365600-e7bf50d0b226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  secondaryhighlightone:{
                    mainhighlight:'Water Resistent',
                    subhighlight:'Water Depth test of 100m.'
                  },
                  secondaryhighlighttwo:{
                    mainhighlight:'UnBrokable',
                    subhighlight:'1000 Drop Test',
                  },
                  secondaryhighlightthree:{
                    mainhighlight:'Ear Fit',
                    subhighlight:'Professional Building',
                  },
                  prodsmallreview:[
                    {
                      smallrevid:1,
                      starrate:3,
                      reviewinsmall:'Good Build quality -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    },
                    {
                      smallrevid:2,
                      starrate:1,
                      reviewinsmall:'Best Bought -',
                      reviewerofsamll:'Yash',
                      userimage:'https://images.unsplash.com/photo-1584635234347-ce88034d9501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'  
                    },
                    {
                      smallrevid:3,
                      starrate:5,
                      reviewinsmall:'Good Bass -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600'

                    }
                  ]     
                }
              ],
              qualityassuringimages:
                {
                  
                  qualimgone:'https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
                  qualimgtwo:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
                  qualimgthree:'https://images.unsplash.com/photo-1634874257408-94215a587d88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
                  qualimgfour:'https://images.unsplash.com/photo-1616781678220-15abd16b61e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8'
                },
              moreothersellings:{
                oterimgone:'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtwo:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgthree:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfour:'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfive:'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgsix:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgseven:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeight:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgnine:'https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgten:'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeleven:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtweleve:'https://images.unsplash.com/photo-1619008054959-921a896885c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwcm9kdWN0fGVufDB8fDB8fHww'
              }
          },
          {
              id:7,
              isforsale:true,
              seller:'vasanth&co',
              brand:'',
              sellerdetail:[{
                sellername:'vasanth&co',
                address:'Thiru.vi.ka.nagar',
                village:'nasiyanur',
                city:'Erode',
                state:'Tamil Nadu',
                phonenum:'8015570575',
              }],
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:2220,
              availability:10,
              arraivaltimeindays:7,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt() {
                return this.amt - (this.amt * this.discountper) / 100; 
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ],
              iteminfo:[
               /*  minimum of 77 words please for each description of content*/
                {
                  
                  infotitle:'Description',
                  description:'Experience seamless connectivity and high-quality audio with Apple AirPods, designed to deliver an immersive and effortless listening experience. With crystal-clear sound, deep bass, and noise isolation, these wireless earbuds provide an unparalleled audio experience for music, calls, and voice assistants. The ergonomic, lightweight design ensures all-day comfort, while the advanced sensors and intuitive touch controls make managing music and calls easier than ever.'
                },
                {
                
                  infotitle:'Shipping & Returns',
                  description:'We are committed to providing a seamless shopping experience with fast and reliable shipping. Orders are processed within 24-48 hours and shipped via trusted carriers to ensure timely delivery. Estimated delivery times vary based on location and selected shipping method, with tracking information provided for every order.If you are not completely satisfied with your purchase, we offer a hassle-free return policy. Items can be returned within [X] days of delivery in their original condition and packaging for a full refund or exchange.'
                },
                {
                
                  infotitle:'Return Policies',
                  description:'We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items can be returned within [X] days of delivery, provided they are in their original condition, unused, and include all accessories and packaging. Once we receive and inspect the returned item, a full refund or exchange will be processed within [X] business days. Please note that certain items may not be eligible for return due to hygiene or customization reasons. If you have any questions or need assistance with your return, our customer support team is always ready to help.'
                }
              ],
              itemimg:[
                {
                  mainimgarr:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720',
                  subimg:['https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_1.jpg?v=1721289424&width=720','https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600']
                }
              ],
              choiceofitem:[
                {
                  nameforimages:'choiseofprod',
                  numberofchoice:18,
                  mainchoiceimg:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_3.jpg?v=1721289424&width=720',
                  diffimgone:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_5.jpg?v=1721289424&width=720',
                  diffimgtwo:'https://glozin-demo.myshopify.com/cdn/shop/files/headephone_products_12_8.jpg?v=1721289424',
                  diffimgthree:'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfour:'https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgfive:'https://images.unsplash.com/photo-1629367494173-c78a56567877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
                  diffimgsix:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgseven:'https://images.unsplash.com/photo-1628773193539-ad29c647c071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  diffimgeight:'https://images.unsplash.com/photo-1603898037341-52a9292eddd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'
                }
              ],
              producthighlight:[
                {
                  highlight:'Innovative Design',
                  imgone:'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  imgtwo:'https://images.unsplash.com/photo-1607087365600-e7bf50d0b226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D',
                  secondaryhighlightone:{
                    mainhighlight:'Water Resistent',
                    subhighlight:'Water Depth test of 100m.'
                  },
                  secondaryhighlighttwo:{
                    mainhighlight:'UnBrokable',
                    subhighlight:'1000 Drop Test',
                  },
                  secondaryhighlightthree:{
                    mainhighlight:'Ear Fit',
                    subhighlight:'Professional Building',
                  },
                  prodsmallreview:[
                    {
                      smallrevid:1,
                      starrate:3,
                      reviewinsmall:'Good Build quality -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600'
                    },
                    {
                      smallrevid:2,
                      starrate:1,
                      reviewinsmall:'Best Bought -',
                      reviewerofsamll:'Yash',
                      userimage:'https://images.unsplash.com/photo-1584635234347-ce88034d9501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D'  
                    },
                    {
                      smallrevid:3,
                      starrate:5,
                      reviewinsmall:'Good Bass -',
                      reviewerofsamll:'John',
                      userimage:'https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600'

                    }
                  ]     
                }
              ],
              qualityassuringimages:
                {
                  
                  qualimgone:'https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
                  qualimgtwo:'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
                  qualimgthree:'https://images.unsplash.com/photo-1634874257408-94215a587d88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
                  qualimgfour:'https://images.unsplash.com/photo-1616781678220-15abd16b61e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8'
                },
              moreothersellings:{
                oterimgone:'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtwo:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgthree:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfour:'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgfive:'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
                oterimgsix:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgseven:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeight:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgnine:'https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgten:'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgeleven:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
                oterimgtweleve:'https://images.unsplash.com/photo-1619008054959-921a896885c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwcm9kdWN0fGVufDB8fDB8fHww'
              }
            }
      ])
  const[likedis,setlikedisp]=useState(false)
  const[arrayforviewmoreitem,setarrayforviewmoreitem]=useState([])

   const [loadscreen,setloadscreen]=useState(false)
  const [loadanisrc,setloadanisrc]=useState(false)
  useLayoutEffect(() => {
    setloadanisrc(true)
    return () => {
      setloadanisrc(false)
    };
  }, [])

/*  useEffect(() => {
    let timerload=setTimeout(() => {
      setloadscreen((loadscreen)=>!loadscreen)
    }, 5000);
  
    return () => {
      setloadscreen(false)
      clearTimeout(timerload)
    }
  }, [])   */
 
  // Cart page
  const [arrofcart,setarrcart]=useState([])

let setcart=(id,quant)=>{
        let changeitem=arr.map((likeitem)=>likeitem.id===id?{...likeitem,addcart:!likeitem.addcart}:likeitem)
        let getfilt=changeitem.filter((indiitem)=>indiitem.id==id).map((indiforquanchange)=>indiforquanchange.id==id?{...indiforquanchange,quantity:quant,totalamt:indiforquanchange.amt*quant-(indiforquanchange.amt*quant)*indiforquanchange.discountper/100}:indiforquanchange)
       console.log(arr);
       
        setarr(changeitem)

        if(changeitem.filter((indiitem)=>indiitem.id==id)){
          let cartyesorno=getfilt.map((indifil)=>indifil.addcart)
          if(cartyesorno[0]){
            setarrcart((curcart)=>{
              console.log(curcart);         
              let oldcart=curcart
              let newcart=Array.from(getfilt).filter((addcartitem)=>addcartitem.id==id&&addcartitem.addcart)
              let updatedcart=[...oldcart,...newcart]
              console.log('yes');
              
              return updatedcart
            })
            
          }else{
            setarrcart((curcart)=>{
              console.log(curcart);         
              
              let newcart=Array.from(curcart).filter((addcartitem)=>addcartitem.id!=id)
              let updatedcart=[...newcart]
              console.log('no');
              
              return updatedcart
            })
            
          }
         
        }else{
          console.log('nd');
          
        }

        
    }

let sethrtfunc=(id)=>{
            let changeitem=arr.map((likeitem)=>likeitem.id===id?{...likeitem,like:!likeitem.like}:likeitem)
            setarr(changeitem)
}
        

  const [footer,setfooter]=useState(false)
/* 
  useEffect(() => {
    let addcartarr=Array.from(arr).filter((addcartitem)=>addcartitem.addcart)
    setarrcart((curcart)=>{
      console.log(curcart);
      
      let oldcart=curcart
      let newcart=addcartarr
      let updatedcart=[...oldcart,...newcart]
      console.log(updatedcart);
      
      return updatedcart
    })
  return () => {
    setarrcart([])
  }
}, [arr]) */

const [sumamt,setsumamt]=useState(0)

const [pinnum,setpinnum]=useState('')


useEffect(() => {
  
    Array.from(arrofcart).forEach((indiarramt)=>
        setsumamt((curamt)=>{
            let curentamt=indiarramt.totalamt
            let totamt=Number(curamt)+Number(curentamt)
            return totamt
        })
    )

    return () =>{
        setsumamt(0)
    }

  
}, [arrofcart,arr])
   
const [viewbox,setviewbox]=useState(false)
const[nameinarr,getnameinarr]=useState('')
let[arrayforshortitem,setarrayforshortitem]=useState([])

const regex = /^[0-9]+$/; 
    
const [alertboxinbuy,setalertboxinbuy]=useState(false)
const [delavailtxt,setdelavailtxt]=useState(false)
const [pindistname,setpindistname]=useState('--')
const [arrayforextrainfo,setarrayforextrainfo]=useState([])
let getparticularname=(name)=>{
  setviewbox(true)
  getnameinarr(name)
  
}
let getlocationforalsobuy=useLocation()
useEffect(() => {
  console.log(getlocationforalsobuy.pathname);
  if (String(getlocationforalsobuy.pathname).includes(`/viewmore/`)&&arrayforextrainfo.length>=4) {
    let getelemntforitemshort=Array.from(arrayforextrainfo).filter((indiitem,index)=>index==nameinarr)
    setarrayforshortitem(getelemntforitemshort)
  }else{
    let getelemntforitemshort=Array.from(arr).filter((indiitem)=>indiitem.id==nameinarr)
    setarrayforshortitem(getelemntforitemshort)
  }
  
  
}, [nameinarr,arr])


let getpinlocation=async()=>{
  let numpin=Number(pinnum)
  
  let getpincodelocation=async()=>{
      try{
          let getdata=await fetch(`https://api.postalpincode.in/pincode/${numpin}`)
          if(!getdata.ok)throw Error('Request time out')
          let jsonfile=await getdata.json()
          let datageting=jsonfile[0].PostOffice[0].District
          setpindistname(datageting)
          setdelavailtxt(true)
          setalertboxinbuy(false)
                
      }catch(err){
          console.log(err);
          setdelavailtxt(false)

      }
      finally{
          console.log('ended');
          
      }  
  }
  getpincodelocation()
  
}


useEffect(() => {
  setdelavailtxt(false)

return () => {
              
              setdelavailtxt(false)
}
}, [pinnum])


useEffect(() => {
        
  let timerforalrt=setTimeout(() => {
      setalertboxinbuy(false)

  }, 4000);
 
   return () => {
      clearTimeout(timerforalrt)
  }
 }, [alertboxinbuy])

 const[commentboxshow,setcommentboxshow]=useState(false)
 const [shareboxshow,setshareboxshow]=useState(false)
 const [questboxshow,setquestboxshow]=useState(false)
 const [sellerdetailbox,setsellerdetailbox]=useState(false)
 const [serval,setserval]=useState('')

 
     const[inpname,setinpname]=useState('')
 
     const[inpaddress,setaddress]=useState('')
 
     const[inpphone,setinpphone]=useState('')
 
     const[inpstate,setinpstate]=useState('')
 
 
 
     const[inpcity,setinpcity]=useState('')


     const[addresscont,setaddresscont]=useState('Make delivery simple')
     const[subaddresscont,setsubaddresscont]=useState('Add delivery Address..!')







       
       const[arrayforallitems,setarrayforallitems]=useState([])






  return (
    <>
     {/* <div className='loadscreen' style={{display:loadscreen?'none':'flex'}}>
      {loadanisrc&&( <DotLottieReact
        src="https://lottie.host/0df1e67e-9d49-4b2c-901e-353e1c438556/kHOSySzMFk.lottie"
        loop
        autoplay
        style={{ width: '300px', height: '300px' }}
      />)} 
     
      <div className='loader-sym-container'>
        <div className='loader-sym-container1'>
          <div className='loader-1'></div>
          <div className='loader-2'></div>
          <div className='loader-3'></div>
          <div className='loader-4'></div>
        </div>      
      </div>
      <div className='loding-line'>
        <div className='loader' style={{animation:loadscreen?'':'slideload 4.8s cubic-bezier(.07,.2,1,.22)'}} ></div>
      </div>
    </div>  */} 
    <div className='app'/*  style={{display:loadscreen?'flex':'none'}} */ >
      <Routes>
        <Route path='/' >
            <Route index element={<Home setserval={setserval} serval={serval} getparticularname={getparticularname} setfooter={setfooter} const sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arrofcart={arrofcart}  setlikedisp={setlikedisp} arr={arr} setarr={setarr}/>}/>
            <Route path='yourcart' element={ <Cart arr={arr} setarr={setarr} sumamt={sumamt}  arrofcart={arrofcart} setarrcart={setarrcart} setlikedisp={setlikedisp}  setfooter={setfooter}/>}></Route>
            <Route path='/proceedtopay' element={<Payment setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setarrayforextrainfo={setarrayforextrainfo} arrayforviewmoreitem={arrayforviewmoreitem} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>
            <Route path='/proceedtopay/:id' element={<Payment setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setarrayforextrainfo={setarrayforextrainfo} arrayforviewmoreitem={arrayforviewmoreitem} pinnum={pinnum} arr={arr} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>
            <Route path='/viewmore/:id' element={<Itemoverview arrayforextrainfo={arrayforextrainfo} getparticularname={getparticularname} sellerdetailbox={sellerdetailbox} setsellerdetailbox={setsellerdetailbox} setquestboxshow={setquestboxshow} questboxshow={questboxshow} shareboxshow={shareboxshow} setshareboxshow={setshareboxshow} arrayforviewmoreitem={arrayforviewmoreitem} setarrayforviewmoreitem={setarrayforviewmoreitem} setarrcart={setarrcart} arrofcart={arrofcart} sethrtfunc={sethrtfunc} setcart={setcart} setlikedisp={setlikedisp} arr={arr} setarr={setarr} commentboxshow={commentboxshow} setcommentboxshow={setcommentboxshow} pinnum={pinnum}  setpinnum={setpinnum} getpinlocation={getpinlocation} delavailtxt={delavailtxt} setdelavailtxt={setdelavailtxt} pindistname={pindistname} setpindistname={setpindistname} setfooter={setfooter} alertboxinbuy={alertboxinbuy} setalertboxinbuy={setalertboxinbuy} regex={regex} setviewbox={setviewbox}/> }></Route>
            <Route path='/viewmore/:id/yourcart' element={ <Cart arr={arr} setarr={setarr} sumamt={sumamt}  arrofcart={arrofcart} setarrcart={setarrcart} setlikedisp={setlikedisp}  setfooter={setfooter}/>}></Route>
            <Route path='/viewmore/:id/proceedtopay' element={<Payment setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setarrayforextrainfo={setarrayforextrainfo} arrayforviewmoreitem={arrayforviewmoreitem} pinnum={pinnum} arr={arr} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>
            <Route path='/itemviewall' element={< Viewallitem subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/>}/>
            <Route path='/itemviewall/yourcart' element={ <Cart arr={arr} setarr={setarr} sumamt={sumamt}  arrofcart={arrofcart} setarrcart={setarrcart} setlikedisp={setlikedisp}  setfooter={setfooter}/>}></Route>
            <Route path='/itemviewall/yourcart/proceedtopay' element={<Payment setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setarrayforextrainfo={setarrayforextrainfo} arrayforviewmoreitem={arrayforviewmoreitem} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>
            <Route path='/itemviewall/viewmore/:id' element={<Itemoverview arrayforextrainfo={arrayforextrainfo} getparticularname={getparticularname} sellerdetailbox={sellerdetailbox} setsellerdetailbox={setsellerdetailbox} setquestboxshow={setquestboxshow} questboxshow={questboxshow} shareboxshow={shareboxshow} setshareboxshow={setshareboxshow} arrayforviewmoreitem={arrayforviewmoreitem} setarrayforviewmoreitem={setarrayforviewmoreitem} setarrcart={setarrcart} arrofcart={arrofcart} sethrtfunc={sethrtfunc} setcart={setcart} setlikedisp={setlikedisp} arr={arr} setarr={setarr} commentboxshow={commentboxshow} setcommentboxshow={setcommentboxshow} pinnum={pinnum}  setpinnum={setpinnum} getpinlocation={getpinlocation} delavailtxt={delavailtxt} setdelavailtxt={setdelavailtxt} pindistname={pindistname} setpindistname={setpindistname} setfooter={setfooter} alertboxinbuy={alertboxinbuy} setalertboxinbuy={setalertboxinbuy} regex={regex} setviewbox={setviewbox}/> }></Route>
            <Route path='/itemviewall/viewmore/:id/proceedtopay' element={<Payment setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setarrayforextrainfo={setarrayforextrainfo} arrayforviewmoreitem={arrayforviewmoreitem} pinnum={pinnum} arr={arr} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>
            <Route path='/itemviewall/easter' element={ <Subsection subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  setfooter={setfooter}   getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/> }/>
            <Route path='/itemviewall/savings' element={ <Subsection subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  setfooter={setfooter}   getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/> }/>
            <Route path='/itemviewall/fashion' element={ <Subsection subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  setfooter={setfooter}   getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/> }/>
            <Route path='/itemviewall/festivespecials' element={ <Subsection subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  setfooter={setfooter}   getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/> }/>
            <Route path='/itemviewall/newarraivals' element={ <Subsection subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  setfooter={setfooter}   getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/> }/>
            <Route path='/itemviewall/seasonalsales' element={ <Subsection subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  setfooter={setfooter}   getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/> }/>
            <Route path='/itemviewall/yearlygrownup' element={ <Subsection subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  setfooter={setfooter}   getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/> }/>
            <Route path='/itemviewall/bogo' element={ <Subsection subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} arrayforallitems={arrayforallitems} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpcity={setinpcity} inpcity={inpcity} setinpstate={setinpstate} inpstate={inpstate} setinpphone={setinpphone} inpphone={inpphone} setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname} setlikedisp={setlikedisp}  setfooter={setfooter}   getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}/> }/>

            
        </Route>
        </Routes>
      <Foter footer={footer}/>
      <LikePage sellerdetailbox={sellerdetailbox} questboxshow={questboxshow} shareboxshow={shareboxshow} commentboxshow={commentboxshow} viewbox={viewbox} likedis={likedis} setlikedisp={setlikedisp} arr={arr} setarr={setarr}/> 
      <Itemshortview setfooter={setfooter} arrayforshortitem={arrayforshortitem} getpinlocation={getpinlocation} delavailtxt={delavailtxt} setdelavailtxt={setdelavailtxt} pindistname={pindistname} setpindistname={setpindistname} pinnum={pinnum} setpinnum={setpinnum} sethrtfunc={sethrtfunc}  setcart={setcart} nameinarr={nameinarr} setviewbox={setviewbox} viewbox={viewbox} alertboxinbuy={alertboxinbuy} setalertboxinbuy={setalertboxinbuy} regex={regex}/>
    </div>
    </>
    
  )
}

export default App




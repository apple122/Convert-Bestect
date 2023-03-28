import React from 'react'
import Image from "next/image";
import whatsapp from '../../../public/flex-ui-assets/icons/whatsapp.png'
import facebook from '../../../public/flex-ui-assets/icons/facebook.png'
import IG from '../../../public/flex-ui-assets/icons/instagram.png'
import { db_out_team } from '../../../util/data'
import { Reorder } from "framer-motion"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function List_Y() {

  const [API, setAPI] = useState([])
  useEffect(() => {
      axios.get(db_out_team.context).then((res) => {
          setAPI(res.data)
      })
  }, [])

  return (
      <></>
  )
}
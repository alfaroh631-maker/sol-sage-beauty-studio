'use client'
import {useState} from 'react'
import Link from 'next/link'

export default function MobileHeader(){
  const [open,setOpen]=useState(false)
  const close=()=>setOpen(false)
  return <>
    <header className="site-header"><Link className="logo" href="/" onClick={close}>SOL & SAGE<span>BEAUTY STUDIO</span></Link><nav className={open?'mobile-open':''}><Link href="/services" onClick={close}>Services</Link><Link href="/gallery" onClick={close}>Gallery</Link><Link href="/about" onClick={close}>About</Link><Link href="/reviews" onClick={close}>Reviews</Link><Link href="/faq" onClick={close}>FAQ</Link><Link href="/contact" onClick={close}>Contact</Link></nav><div className="header-actions"><Link href="/es" onClick={close}>ES</Link><Link className="button small" href="/book" onClick={close}>Book an Appointment</Link><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'×':'Menu'}</button></div></header>
  </>
}

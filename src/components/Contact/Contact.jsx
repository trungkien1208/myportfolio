import { useEffect, useRef, useState } from 'react'
import {
  ChatCircleDots,
  Check,
  Copy,
  GithubLogo,
  LinkedinLogo,
  Phone,
  Sparkle,
  Star,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { contact } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2400)
    } catch {
      // Clipboard blocked: fall back to the mail app
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <section id='contact' className='section'>
      <div className='container'>
        <Reveal className='hello card tone-primary'>
          <Sparkle
            className='hello__spark hello__spark--1'
            size={56}
            weight='fill'
            aria-hidden='true'
          />
          <Star
            className='hello__spark hello__spark--2'
            size={40}
            weight='duotone'
            aria-hidden='true'
          />
          <Sparkle
            className='hello__spark hello__spark--3'
            size={34}
            weight='duotone'
            aria-hidden='true'
          />
          <Star
            className='hello__spark hello__spark--4'
            size={52}
            weight='fill'
            aria-hidden='true'
          />
          <h2 className='hello__title'>{contact.title}</h2>
          <p className='hello__body'>{contact.body}</p>

          <div className='hello__email'>
            <a className='hello__address' href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <button
              type='button'
              className='btn btn-ink hello__copy'
              onClick={copyEmail}
            >
              {copied ? (
                <Check size={18} weight='bold' />
              ) : (
                <Copy size={18} weight='bold' />
              )}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <p className='hello__toast' role='status' aria-live='polite'>
            {copied ? 'Copied. Now paste it somewhere nice.' : ''}
          </p>

          <div className='hello__links'>
            <a
              className='btn'
              href={contact.phone.zalo}
              target='_blank'
              rel='noreferrer'
            >
              <ChatCircleDots size={18} weight='fill' />
              Zalo
            </a>
            <a
              className='btn'
              href={contact.phone.whatsapp}
              target='_blank'
              rel='noreferrer'
            >
              <WhatsappLogo size={18} weight='fill' />
              WhatsApp
            </a>
            <a className='btn' href={`tel:${contact.phone.tel}`}>
              <Phone size={18} weight='fill' />
              {contact.phone.display}
            </a>
            <a
              className='btn'
              href={contact.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              <LinkedinLogo size={18} weight='fill' />
              LinkedIn
            </a>
            <a
              className='btn'
              href={contact.github}
              target='_blank'
              rel='noreferrer'
            >
              <GithubLogo size={18} weight='fill' />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact

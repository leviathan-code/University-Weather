import React from 'react'
import classes from './Icon.module.scss'

export default function Icon1() {
  return (
    <div className={classes.icon}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_222_100)" filter="url(#filter0_d_222_100)">
            <path d="M11 0H8C5.79086 0 4 1.79086 4 4V7C4 9.20914 5.79086 11 8 11H11C13.2091 11 15 9.20914 15 7V4C15 1.79086 13.2091 0 11 0Z" fill="white"/>
            <path d="M24 0H21C18.7909 0 17 1.79086 17 4V7C17 9.20915 18.7909 11 21 11H24C26.2091 11 28 9.20915 28 7V4C28 1.79086 26.2091 0 24 0Z" fill="white"/>
            <path d="M11 13H8C5.79086 13 4 14.7909 4 17V20C4 22.2092 5.79086 24 8 24H11C13.2091 24 15 22.2092 15 20V17C15 14.7909 13.2091 13 11 13Z" fill="white"/>
            <path d="M24 13H21C18.7909 13 17 14.7909 17 17V20C17 22.2092 18.7909 24 21 24H24C26.2091 24 28 22.2092 28 20V17C28 14.7909 26.2091 13 24 13Z" fill="white"/>
        </g>
        <defs>
            <filter id="filter0_d_222_100" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_100"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_222_100" result="shape"/>
            </filter>
            <clipPath id="clip0_222_100">
                <rect width="24" height="24" fill="white" transform="translate(4)"/>
            </clipPath>
        </defs>
    </svg>
</div>
)
}

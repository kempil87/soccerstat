import React from "react";
import "./Footer.css"
import {hover} from "@testing-library/user-event/dist/hover";


export const Footer = () => {
    return (
        <div className={"footer"}>
            <div className="footer-left">
                © 2022 Глеб Макаров
                <a className="git-tittle" href="https://github.com/kempil87">
                    GIT Kempil87
                </a>
            </div>
            <div className="footer-right">
                <div className="footer-social">
                    <span>Social</span>
                    <a href="https://www.instagram.com/makarof87/?hl=ru">
                        <svg className={"footer-social-inst"} version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                             preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                               fill="#000000" stroke="none">
                                <path d="M1609 5110 c-330 -14 -556 -56 -747 -138 -179 -77 -285 -148 -417
-279 -178 -177 -289 -376 -359 -643 -62 -236 -76 -507 -76 -1490 0 -967 13
-1241 71 -1477 144 -587 574 -961 1207 -1048 181 -24 561 -35 1287 -35 675 0
1064 10 1239 31 358 42 638 166 859 378 249 240 381 527 429 936 19 160 19
2294 0 2445 -39 306 -130 558 -274 751 -71 96 -223 241 -318 306 -215 145
-474 225 -815 254 -161 13 -1813 20 -2086 9z m2163 -483 c285 -42 445 -113
599 -266 100 -100 155 -188 204 -324 82 -230 90 -352 90 -1482 0 -651 -4 -964
-13 -1069 -29 -347 -98 -534 -260 -707 -169 -180 -380 -269 -707 -299 -177
-17 -1640 -25 -1977 -11 -152 6 -311 16 -354 22 -189 26 -372 93 -486 176 -71
53 -185 177 -227 247 -84 140 -134 337 -151 587 -30 454 -20 2012 14 2270 36
267 119 447 276 599 172 167 398 248 748 270 76 4 587 7 1137 5 853 -2 1016
-4 1107 -18z"/>
                                <path d="M3802 4200 c-113 -57 -167 -145 -167 -275 0 -94 22 -150 86 -214 64
-63 120 -86 214 -86 67 0 89 4 137 28 101 50 158 137 166 253 7 103 -16 163
-87 235 -66 66 -124 89 -221 89 -54 0 -78 -6 -128 -30z"/>
                                <path d="M2336 3854 c-263 -48 -496 -171 -692 -368 -260 -259 -385 -562 -385
-926 0 -220 41 -401 132 -583 280 -556 896 -841 1495 -692 236 59 418 161 595
332 159 154 266 322 333 523 48 145 66 257 66 420 0 162 -18 275 -65 417 -64
192 -157 344 -302 494 -198 204 -445 336 -717 384 -111 19 -352 19 -460 -1z
m396 -458 c458 -88 762 -538 674 -999 -54 -279 -259 -527 -521 -628 -128 -50
-202 -62 -350 -56 -105 4 -146 10 -215 32 -303 96 -524 341 -586 649 -24 119
-15 304 21 416 94 298 345 525 644 585 89 18 243 18 333 1z"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://vk.com/glebofficial87">

                        <svg className={"footer-social-vk"} version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                             preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                               fill="#000000" stroke="none">
                                <path d="M2145 4014 c-97 -7 -221 -26 -270 -41 -85 -26 -190 -120 -171 -152 4
-5 23 -13 44 -17 92 -17 169 -69 204 -137 59 -116 86 -480 54 -737 -21 -170
-30 -209 -62 -271 -83 -166 -276 -32 -488 340 -76 132 -288 556 -335 669 -58
137 -76 162 -141 195 l-55 28 -415 -3 c-375 -3 -418 -5 -447 -21 -47 -25 -67
-60 -60 -105 6 -48 163 -398 279 -622 226 -436 418 -753 622 -1030 301 -407
434 -539 741 -735 143 -92 247 -143 375 -186 176 -59 252 -70 515 -76 261 -6
336 2 392 40 45 31 59 74 68 207 8 132 34 245 69 305 32 53 99 115 129 116
101 5 158 -37 370 -275 199 -223 272 -288 382 -341 50 -23 110 -47 135 -53 60
-14 870 2 922 17 52 16 108 71 109 107 4 99 -11 144 -80 249 -92 138 -170 226
-437 490 -284 281 -303 307 -304 401 0 79 37 139 286 469 351 465 491 690 530
848 23 93 10 138 -49 170 l-42 22 -505 -3 c-357 -3 -512 -7 -530 -15 -34 -16
-69 -75 -114 -187 -120 -299 -367 -730 -530 -924 -65 -77 -166 -156 -199 -156
-47 0 -86 30 -115 90 l-27 55 3 519 c3 559 1 575 -50 649 -51 72 -175 97 -508
102 -135 1 -267 1 -295 -1z"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://vk.com/glebofficial87">
                         <svg className={"footer-social-teleg"} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                                   width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                                                   preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                               fill="#000000" stroke="none">
                                <path d="M4770 4666 c-340 -125 -4535 -1736 -4597 -1766 -205 -97 -229 -225
-58 -312 17 -9 300 -99 631 -202 l601 -187 1364 854 c751 469 1380 859 1398
865 47 16 87 15 105 -4 13 -13 14 -19 3 -38 -6 -13 -505 -466 -1107 -1006
-602 -541 -1097 -987 -1099 -992 -2 -5 -22 -275 -45 -600 l-42 -590 46 6 c25
3 64 16 87 29 24 12 180 154 349 315 168 161 312 296 319 298 7 3 275 -187
596 -422 320 -235 607 -438 638 -452 81 -38 171 -41 230 -10 53 28 104 98 126
171 8 28 192 875 407 1882 359 1676 392 1838 392 1925 0 82 -3 102 -25 145
-15 31 -42 62 -68 80 -59 41 -157 46 -251 11z"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

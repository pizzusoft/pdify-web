import React, { useEffect, useRef, useLayoutEffect } from "react";
import styles from "../style";
import { HeroBanner } from "../assets";
import gsap from "gsap";

const Hero = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            const t2 = gsap.timeline();
            t1.fromTo(
                "#hero-image",
                { scale: "0", duration: 1 },
                { scale: "1", duration: 1 }
            );
            t2.fromTo(
                "#hero-text",
                { x: "-10%", opacity: 0 },
                { x: "0%", opacity: 1, duration: 0.5 }
            )
                .fromTo(
                    "#hero-text-2",
                    { x: "-5%", opacity: 0 },
                    { x: "0%", opacity: 1, duration: 1 }
                )
                .fromTo(
                    "#hero-text-3",
                    { x: "-5%", opacity: 0 },
                    { x: "0%", opacity: 1 }
                );
        }, comp);

        return () => ctx.revert();
    }, []);
    return (
        <section
            ref={comp}
            id='home'
            className={`flex md:flex-row flex-col ${styles.paddingY} pt-[5rem] sm:pt-[3rem]`}
        >
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16  px-6  pt-5`}
            >
                {/* <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <img
                        src={discount}
                        alt='discount'
                        className='w-[32px] h-[32px]'
                    />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className='text-gray-600 dark:text-white'>
                            20%
                        </span>
                        Discount For
                        <span className='text-gray-600 dark:text-white'>
                            1 Month
                        </span>
                        Account
                    </p>
                </div> */}

                <div
                    className='flex flex-row justify-between items-center w-full'
                    id='hero-text'
                >
                    <h1 className='flex flex-col font-poppins font-semibold ss:text-[32px] text-[52px] text-gray-600 dark:text-white ss:leading-[70.8px] leading-[60px]'>
                        <span className='sm:text-[62px] text-[40px] '>
                            We Build
                        </span>
                        <span className='text-gradient ss:text-[72px]'>
                            Software
                        </span>
                        <span className='text-[32px] ss:text-[32px]'>
                            Makes Daily Life More Easier.
                        </span>
                    </h1>
                    {/* <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div> */}
                </div>

                <div
                    className='flex justify-center items-center gap-4 px-8 xpy-1 bg-slate-700 rounded-full'
                    id='hero-text-2'
                >
                    <img
                        src='./icon.png'
                        className='h-[30px] sm:h-[45px]'
                        alt='icon'
                    />
                    <h1 className='xtext-gradient-logo font-poppins font-[700] ss:text-[48px] text-[32px] text-gray-600 dark:text-white  w-full'>
                        PDIFY
                    </h1>
                    <sup className=' text-gray-600 dark:text-white'>
                        <span className='text-gradient xs:text-[16px] sm:text-[18px] font-semibold'>
                            v1.5.1
                        </span>
                    </sup>
                </div>
                <p
                    className={`${styles.paragraph} max-w-[470px] mt-5 text-current`}
                    id='hero-text-3'
                >
                    PDIFY isa cross-browser extension where you can make a pdf
                    from images or edit it in your browser from website images
                    without downloading or uploading in a minute.
                </p>
            </div>

            <div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                <img
                    src={HeroBanner}
                    alt='billing'
                    className='xw-[40%] xh-[100%] relative z-[5]'
                    id='hero-image'
                />

                {/* gradient start */}
                {/* <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' /> */}
                {/* gradient end */}
            </div>

            {/* <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div> */}
        </section>
    );
};

export default Hero;

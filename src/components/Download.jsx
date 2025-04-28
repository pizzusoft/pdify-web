import { ChromeWebStore, DownloadBanner, EdgeAddOns } from "../assets";
import styles, { layout } from "../style";
const Download = () => (
    <section id='download' className={layout.section}>
        <div className={layout.sectionImgReverse}>
            <img
                src={DownloadBanner}
                alt='billing'
                className='w-[100%] h-[100%] relative z-[5]'
            />
            {/* gradient start */}
            {/* <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
            <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' /> */}
            {/* gradient end */}
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full blue__gradient' />
            <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
        </div>

        <div className={`${layout.sectionInfo} `}>
            <h2 className={`${styles.heading2} xtext-gradient`}>
                Create pdf <br className='sm:block hidden' />
                <span className='text-gradient uppercase font-bold'>
                    fast & secure
                </span>
            </h2>
            <p className={`${styles.paragraph} text-left w-full mt-2`}>
                Add the extension to your browser and you ready to use.
            </p>

            <div className='w-full flex flex-col sm:flex-row flex-wrap sm:mt-10 mt-4 gap-4'>
                <a
                    href='https://chromewebstore.google.com/detail/pdify/jefldaehieliinjhjfjbkgongiljnpji'
                    target='_blank'
                >
                    <img
                        src={ChromeWebStore}
                        alt='google_play'
                        className='w-[160px] h-[56px] object-contain mr-5 cursor-pointer'
                    />
                </a>
                <a
                    href='https://microsoftedge.microsoft.com/addons/detail/pdify-image-to-pdf-edi/adppiipkibhjnjjgahmeffimjaidlebn'
                    target='_blank'
                >
                    <img
                        src={EdgeAddOns}
                        alt='google_play'
                        className='w-[160px] h-[56px] object-contain cursor-pointer'
                    />
                </a>
            </div>
        </div>
    </section>
);

export default Download;

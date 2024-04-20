import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomSlideProps {
    index: number,
    title: string,
    caption: string;
}

interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
  
const CustomNextArrow: React.FC<CustomArrowProps> = ({
    className,
    style,
    onClick
    }) => {
    return (
        <div
            className={`${className} !hidden !right-14 z-10 lg:!block before:!text-6xl before:!text-darkgrey`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};
const CustomPrevArrow: React.FC<CustomArrowProps> = ({
    className,
    style,
    onClick
    }) => {
    return (
        <div
            className={`${className} !hidden !left-5 z-10 lg:!block before:!text-6xl before:!text-darkgrey`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const CustomSlide: React.FC<CustomSlideProps> = ({index, ...props}) => {

    return (
        <div className="cursor-pointer flex flex-col m-2 pt-10 md:pt-20 pb-6 px-8 bg-wheat rounded-xl">
            <h5 className="pb-10 md:pb-20 text-center text-anton text-darkgrey text-2xl sm:text-3xl md:text-4xl">{props.title}</h5>
            <hr className="border-t-2 border-darkgrey" />
            <p className="text-poppins text-darkgrey text-xl pt-2">{props.caption}</p>
        </div>
    );
}

const ProjectsCarousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centrePadding: "60px",
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
    <div className="slider-container">
        <Slider {...settings}>
            <CustomSlide index={1} title="Podoma" caption="Laravel website for showcasing brand products with CMS"/>
            <CustomSlide index={1} title="Virtual Axis Studio" caption="WordPress Website"/>
            <CustomSlide index={1} title="Python Automation" caption="Case Study"/>
        </Slider>
    </div>
    );
}

export default ProjectsCarousel;
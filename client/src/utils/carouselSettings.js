const arrowStyles = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2px',
    background: '#ff6e29'
}

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...arrowStyles
            }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...arrowStyles
            }}
            onClick={onClick}
        />
    );
}

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}


export const detailsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

export const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        // {
        //     breakpoint: 1400,
        //     settings: {
        //         dots: true,
        //         infinite: true,
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //     }
        // },
        {
            breakpoint: 900,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

    ]
}

export const urls = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/da/8b/9c/5-person-room-ensuite--v13541582.jpg?w=900&h=-1&s=1',
    'https://www.onetravel.com/going-places/wp-content/uploads/2020/09/hotel-travel-hacks-810x486.jpg',
    'https://www.fodors.com/wp-content/uploads/2017/10/mnt14.jpg',
    'https://cdn.lifestyleasia.com/wp-content/uploads/2019/02/12084046/ion-hotel-slider.jpg',
    'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2016/06/Wildflower-Resort-in-Shimla.jpg',
    'https://media.architecturaldigest.com/photos/5d51c8f565bebb000996aff3/16:9/w_2560%2Cc_limit/Tout_20130618_exteriors-016.jpg',
    'https://www.planetware.com/wpimages/2020/05/montana-glacier-national-park-best-places-to-stay-lodging-inside-many-glacier-hotel.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAH-TmwfPPE6z7zg6TVf5CdiTz7VmO573GWw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2N4y-szt0tq8EQjRZu9_e2hIMEWzdMRUQAVuyCtCfH04jvqIJ_GqEEx1UfkpKyiPAAg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqTSmpwotuGPkEEpI2hTCFuXIqJDDiRcsww&usqp=CAU'
]

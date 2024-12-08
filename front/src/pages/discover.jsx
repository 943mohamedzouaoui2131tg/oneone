import { useEffect } from "react";
import { gsap } from "gsap";

export default function Discover() {

    useEffect(() => {
        gsap.fromTo(
            ".marquee__part",
            {
                duration: 5,
                xPercent:0,
                repeat: -1,

                ease: "linear",
            },
            {
                repeat: -1,
                xPercent: -100,

                duration: 5,
                attr: { offset: "100%" },
                ease: "linear",
            }
        );
    }, []);
    return (
        <div className="discover">
            <div class="marquee marquee1">
                    <div class="marquee__inner">
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                        <div class="marquee__part">get your data with insufi</div>
                    </div>
            </div>
            <div class="marquee marquee2">
                    <div class="marquee__inner">
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                        <div class="marquee__part">be specail with as</div>
                    </div>
            </div>
            <div class="marquee marquee4">
                    <div class="marquee__inner">
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                        <div class="marquee__part">THE 365 DATA</div>
                    </div>
            </div>
            <div class="marquee marquee3">
                    <div class="marquee__inner">
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                        <div class="marquee__part">if you are with us , you can</div>
                    </div>
            </div>
            <div className="container">
                
                <div className="top">
                    <div className="search">
                        <h1>
                            {" "}
                            <span>&#123;</span> get your data <span>&#125;</span>{" "}
                        </h1>
                        <form action="">
                            <input type="text" placeholder="enter what you want to know" />
                            <button>
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                            <button type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                    <div className="topbottom">
                        <p>copyright 2024 all rights <br /> reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

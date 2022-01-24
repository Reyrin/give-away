import React from "react";

// TODO: rewrite stepper

function Stepper({active}) {
    return (
        <div className="stepper">
            <div className={active === 1 ? "stepper__stepper-item active" : active > 1 ? "stepper__stepper-item completed" : 'stepper__stepper-item'}>
                <div className="stepper__counter">1</div>
            </div>
            <div className={active === 2 ? "stepper__stepper-item active" : active > 2 ? "stepper__stepper-item completed" : 'stepper__stepper-item'}>
                <div className="stepper__line"></div>
                <div className="stepper__counter">2</div>
            </div>
            <div className={active === 3 ? "stepper__stepper-item active" : active > 3 ? "stepper__stepper-item completed" : 'stepper__stepper-item'}>
                <div className="stepper__line"></div>
                <div className="stepper__counter">3</div>
            </div>
            <div className={active === 4 ? "stepper__stepper-item active" : active > 4 ? "stepper__stepper-item completed" : 'stepper__stepper-item'}>
                <div className="stepper__line"></div>
                <div className="stepper__counter">4</div>
            </div>
            <div className={active === 5 ? "stepper__stepper-item active" : active > 5 ? "stepper__stepper-item completed" : 'stepper__stepper-item'}>
                <div className="stepper__line"></div>
                <div className="stepper__counter">5</div>
            </div>
        </div>
    );
}

export default Stepper;

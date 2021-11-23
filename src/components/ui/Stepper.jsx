import React from "react";

function Stepper() {
    return (
        <div className="stepper">
            <div className="stepper__stepper-item completed">
                <div className="stepper__counter">1</div>
            </div>
            <div className="stepper__stepper-item completed">
                <div className="stepper__line"></div>
                <div className="stepper__counter">2</div>
            </div>
            <div className="stepper__stepper-item active">
                <div className="stepper__line"></div>
                <div className="stepper__counter">3</div>
            </div>
            <div className="stepper__stepper-item">
                <div className="stepper__line"></div>
                <div className="stepper__counter">4</div>
            </div>
            <div className="stepper__stepper-item">
                <div className="stepper__line"></div>
                <div className="stepper__counter">5</div>
            </div>
        </div>
    );
}

export default Stepper;

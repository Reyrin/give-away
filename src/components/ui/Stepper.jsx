import React from "react";

function Stepper() {
    return (
        <div class="stepper">
            <div class="stepper__stepper-item completed">
                <div class="stepper__counter">1</div>
            </div>
            <div class="stepper__stepper-item completed">
                <div class="stepper__line"></div>
                <div class="stepper__counter">2</div>
            </div>
            <div class="stepper__stepper-item active">
                <div class="stepper__line"></div>
                <div class="stepper__counter">3</div>
            </div>
            <div class="stepper__stepper-item">
                <div class="stepper__line"></div>
                <div class="stepper__counter">4</div>
            </div>
            <div class="stepper__stepper-item">
                <div class="stepper__line"></div>
                <div class="stepper__counter">5</div>
            </div>
        </div>
    );
}

export default Stepper;

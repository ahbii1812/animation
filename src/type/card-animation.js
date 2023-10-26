import "./card-animation.css";

const Card = require("../asset/card.jpg");
const Model = require("../asset/model.png");

export default function CardAnimation() {
  return (
    <div class="card">
      <img src={Card} alt="Card" class="cover" />
      <img src={Model} alt="Model" class="hero" />
    </div>
  );
}

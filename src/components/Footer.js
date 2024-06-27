import fb from "../images/fb.png";
import ig from "../images/ig.png";
import github from "../images/github.png";


export default function Footer() {
    return (
        <div className="footer--container">
      <a href="https://www.facebook.com/desireediane.cabales/">
        <img src={fb} className="footer--image" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/dsrcbls/">
        <img src={ig} className="footer--image" alt="Instagram" />
      </a>
      <a href="https://github.com/desireediane">
        <img src={github} className="footer--image" alt="Github" />
      </a>
    </div>
    )
}
import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(589)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          ullam, vitae explicabo repudiandae, asperiores architecto natus
          tempore totam ad expedita nemo praesentium facere cum laudantium
          accusamus aperiam. Beatae labore magnam qui, facere soluta, velit
          ipsum a voluptates, delectus illum dolorum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex
          praesentium, temporibus accusantium ea doloribus itaque dicta nam
          dolorem, nesciunt impedit labore recusandae quo? In beatae
          consequuntur perferendis expedita nesciunt!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

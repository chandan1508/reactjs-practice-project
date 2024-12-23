const Hero = () =>{
   return (
     <main className="hero container">
        <div className="hero-content">
           <h1>YOUR FEET DESERVE THE BEST</h1>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea ipsa voluptatum ullam hic labore ad voluptates fugiat aliquam, harum inventore ipsam reiciendis aut tempore!
           </p>

           <div className="hero-btn">
              <button>Shop Now</button>
              <button className="secondary-btn">Category</button>
           </div>

           <div className="shopping">
             <p>Also Available on</p>
             <div className="brand-icons">
                <img src="/images/amazon.png" alt="" />
                <img src="/images/flipkart.png" alt="" />
             </div>
           </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="" />
        </div>
     </main>
   );
};

export default Hero;
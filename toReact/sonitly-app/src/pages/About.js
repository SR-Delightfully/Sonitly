const About = () => {
  return (
    <ol id="containers" className="wrapper">
      <li id="about-container">
      <h2>About Sonitly</h2>
        <div id="about-column-left">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
              fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet 
              ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
              delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet 
              ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
              delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
        <div id="about-column-right">
          <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet 
              ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
              delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet 
              ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
              delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </li>

      <li id="contact-container">
      <h2>Get in Touch with Us</h2>
        <div id="contact-form">
          {/* <!-- contact form here --> */}
          <div id="contact-left-column">
            <h3>Contact Details</h3>
            <p>phone number</p>
            <p>email address</p>
            <p>location</p>
          </div>
          <div id="contact-right-column">
            <form action="server-endpoint" method="post">
              <div>
                <label class="contact-label" for="firstName">First Name:</label>
                <input type="text" />
                  
                <label class="contact-label" for="lastName">Last Name:</label>
                <input type="text" />
              </div>

              <br />

              <div>
                <label class="contact-label" for="email">Email:*</label>
                <input type="text" required />

                <label class="contact-label" for="subject">Subject:</label>
                <input type="text" />
              </div>

              <br />
              <textarea placeholder="Enter your questions here!" name="subject-content" rows="25" cols="77"></textarea>
            </form>   
          </div>
        </div>
        </li>
        <li>
        <div id="faq-container">
          <h2>FAQ</h2>
          <div id="faq-flex">
            <div id="faq-left-column">
              <ul>
                <li>Lorum Ipsum</li>
                <li>Lorum Ipsum</li>
                <li>Lorum Ipsum</li>
                <li>Lorum Ipsum</li>
                <li>Lorum Ipsum</li>
                <li>Lorum Ipsum</li>
                <li>Lorum Ipsum</li>
              </ul>
            </div>
            <div id="faq-right-column">
              <img src="/images/image-placeholder.png" alt="Image Placeholder" width="300" height="300" />
            </div>
          </div>  
        </div>
      </li>
    </ol>
  );
}

export default About;

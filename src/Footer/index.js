import "./footer.scss";


function Footer() {
  return (
      <div className="footer">
          <div className="list-footer">
              <ul>
                  <li>Pâtisseries</li>
                  <li>Chocolat</li>
                  <li>Thés</li>
                  <li>Spécialités sucrées</li>
                  <li>Les merveilleux</li>
                  <li>Contactez-nous</li>
              </ul>
            </div>
          <div className="list-footer">
              <ul>
                  <li>Paris</li>
                  <li>Nantes</li>
                  <li>Lyon</li>
                  <li>Marseilles</li>
                  <li>Lilles</li>
                  <li>Biarritz</li>
              </ul>
          </div>
          <div className="list-footer">
              <ul>
                  <li>Recrutements</li>
                  <li>Presse</li>
                  <li>Nos réseaux sociaux</li>
              </ul>
          </div>

      </div>
  );
}

export default Footer;

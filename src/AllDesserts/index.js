import RecipeReviewCard from './cards';
import './allDesserts.scss';
import dessertData from './dessertData';


function AllDesserts() {



  return (
    <>
      <div className="page-title-desserts" to="/tous-les-produits">
        <h1>À la carte</h1>
      </div>
          <div className="allDesserts">
            {dessertData.map((item) => (
              <div className="dessert">
              <RecipeReviewCard {...item}/>
          </div>
        ))}

      </div>
      </>
  );
}

export default AllDesserts;

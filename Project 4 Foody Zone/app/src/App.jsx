import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResults from "./components/SearchResults/SearchResults";

export const BASE_URL = "http://localhost:9000";



function App() {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilterData(json);
        setLoading(false);
      }
      catch {
        setError("Unable to fetch data.")
      }
    }

    fetchFoodData();
  }, []);

  const filterFood = (type) => {
    if(type == "all"){
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter)
    setSelectedBtn(type);
  };

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if(searchValue === ""){
      setFilterData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  }

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>
  if (loading) return <div>loading....</div>

  return (
    <>
       <Container>
      <TopContainer>
        <div className="logo">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="Search Food..." />
        </div>
      </TopContainer>

      <FilterContainer>
        {
          filterBtns.map((value) =>(
            <Button 
            isSelected={selectedBtn === value.type}
            key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
            </Button>
          ))
        }
      </FilterContainer>

    </Container>
    <SearchResults data={filterData}/>
    </>
    
  )
}

export default App;

export const Container = styled.div`
   max-width: 1200px;
   margin: 0 auto;
`;
const TopContainer = styled.section`
   height: 140px;
   display: flex;
   justify-content: space-between;
   padding: 16px;
   align-items: center;

   .search {
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder{
        color: white;
      }
    }
   }

   @media (0<width<600px){
       flex-direction: column;
       height: 120px;
   }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 29px;
`;

 export const Button = styled.button`
   background: ${({isSelected}) => (isSelected ? "green" : "#ff4343")};
   border-radius: 5px;
   padding: 6px 12px;
   border: none;
   color: white;
   cursor: pointer;
   &:hover{
    background-color: #dc1a1a;
   }
`;



import { useState,useEffect } from "react";
import { RepositoryItems } from "./RepositoryItems";

import "../styles/repositories.scss";
import RepositoryItemsInterface from "./interfaces/RepositoryItemsInterface";

export function RepositoryList() {
  
  const [repositories, setRepositories] = useState<RepositoryItemsInterface[]>([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/LuanLeiteLeao/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositóios</h1>
      <ul>
        {repositories.map(repository =>  <RepositoryItems key={repository.name} repository={repository}/>)}
       
      </ul>
    </section>
  );
}

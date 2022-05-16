import React from "react";
import RepositoryItemsInterface from "./interfaces/RepositoryItemsInterface";

interface RepositoryProps{
  repository: RepositoryItemsInterface
}


export class RepositoryItems extends React.Component<RepositoryProps, {}> {

  constructor(props: RepositoryProps){
    super(props);
  }

  render() {
    return (
      <li>
        <strong>{this.props.repository.name}</strong>
        <p>{this.props.repository.description}</p>
        <a href={this.props.repository.html_url}> Acessar repositório</a>
      </li>
    );
  }
}

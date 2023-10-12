function Uzdevums(props) {
    return (
        <div class="uzdevumaDiv">
          <h2>{props.title}</h2>
          <div class="idShowcase">
            <img src="person.svg" />
            <p>{props.id}</p>
          </div>
          <label>
            Izpildīts: 
            <input type="checkbox" checked={props.completed} />
          </label>
        </div>
    );
}

export default Uzdevums;
import React from "react";
import States from "../../data/stateOptions.json";

const PropertiesForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="streetAddress" className="form-label">
          Street Address
        </label>
        <input
          type="text"
          className="form-control"
          id="streetAddress"
          aria-describedby="addressHelp"
        />
        <div id="addressHelp" className="form-text">
          ex. "123 Main Street"
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div className="mb-3" style={{ maxWidth: "37%" }}>
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="stateSelection">
            State
          </label>
          <select className="form-select" id="stateSelection">
            <option selected>Choose...</option>
            {States.map((state, index) => (
              <option key={index} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3" style={{ maxWidth: "20%" }}>
          <label htmlFor="zip-code" className="form-label">
            Zip Code
          </label>
          <input type="text" className="form-control" id="zip-code" />
        </div>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="unitCount">
          Units:
        </label>
        <select class="form-select" id="unitCount">
          <option selected>Choose...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
      </div>
      {/* <button type="submit" className="btn btn-primary">
        Submit
      </button> */}
    </form>
  );
};

export default PropertiesForm;

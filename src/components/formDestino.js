import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './formDestino.css';

function FormDestino() {
  const [contries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    axios.get('https://amazon-api.sellead.com/country').then(response => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('https://amazon-api.sellead.com/city').then(response => {
      setCities(response.data);
    });
  }, []);

  function handleSelectedCountry(e) {
    setFilteredCities(
      cities.filter(city => city.country_code === e.target.value)
    );
  }

  const { register, handleSubmit } = useForm();

  const onSubmit = e => {
    console.log(e);
    alert(
      `Olá, ${e.name}. O seu interesse por ${e.selectedCountry} foi adicionado no nosso sistema e em breve entraremos em contato.`
    );
  };

  return (
    <div className="formDestino">
      <div className="personalData">
        <section id="personalDataHeaderText">Dados Pessoais</section>
        <form
          id="form"
          className="formPersonalData"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="formEach">
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              required
              className="inputForm"
              {...register('name')}
            />
          </div>
          <div className="formEach">
            <span>E-mail:</span>
            <input
              type="text"
              name="email"
              placeholder="Insira seu E-mail"
              required
              className="inputForm"
              {...register('email')}
            />
          </div>
          <div className="formEach">
            <span>Telefone:</span>
            <input
              type="number"
              name="telefone"
              placeholder="(00) 00000-0000"
              required
              className="inputForm"
              {...register('telefone')}
            />
          </div>
          <div className="formEach">
            <span>CPF:</span>
            <input
              type="number"
              name="cpf"
              placeholder="Digite seu CPF"
              required
              className="inputForm"
              {...register('cpf')}
            />
          </div>
        </form>
      </div>

      <div className="destinations">
        <section id="destinationsHeaderText">Escolha seu Destino</section>
        <div className="dropDownList">
          <select
            {...register('selectedCountry')}
            id="country"
            onChange={handleSelectedCountry}
          >
            <option value="0">Selecione o País</option>
            {contries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name_ptbr}
              </option>
            ))}
          </select>

          <select {...register('selectedCity')} id="city">
            <option value="0">Selecione a Cidade</option>
            {filteredCities.map(city => (
              <option key={city.id} value={city.id}>
                {city.name_ptbr}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Enviar" form="form" />
      </div>
    </div>
  );
}

export default FormDestino;

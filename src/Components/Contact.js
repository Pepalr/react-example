import React from 'react';

const Contact = () => <div><form>
<div className="form-group">
  <label htmlFor="exampleFormControlInput1">Nombre</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" required/>
</div>
<div className="form-group">
  <label htmlFor="exampleFormControlInput1">Email</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
</div>
<div className="form-group">
  <label htmlFor="exampleFormControlSelect1">Número de raciones de verdura que come al día</label>
  <select className="form-control" id="exampleFormControlSelect1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>
<div className="form-group">
  <label htmlFor="exampleFormControlTextarea1">Comentarios</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>
<div id="enviar">
    <input type="submit" className="btn btn-info" value="Enviar"/>
    <a className="btn btn-primary" href="index.html" role="button">Atrás</a>
</div></form></div>;

export default Contact;
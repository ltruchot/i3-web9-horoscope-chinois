import React from 'react';
import Person from './Person';

const persons = [
  { nom: 'Catwoman', age: 41, inss: 123 },
  { nom: 'Batman', age: 38, inss: 456 },
];
const Family = ({
  children, clazz,
}) => (
  <div className={clazz}>
    {persons.map(
      (p) => (
        <Person
          key={p.inss}
          {...p}
        />
      ),
    )}
    {' '}
    {children}
  </div>
);

export default Family;

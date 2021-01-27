import './SigneChinois.scss';

const SigneChinois = ({ nom, image, desc }) => (
  <div className="bg-red-800 text-white w-full sm:w-1/2 md:w-1/4">
    {nom}
    <img src={`img/${image}`} alt={`le signe chinois du ${nom}`} />
    <p>{desc}</p>
  </div>
);

export default SigneChinois;

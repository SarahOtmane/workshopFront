
import logo from '../../assets/logo.webp';
import '../../css/backoffice/screen.css';

export default function Login(){
    return(
        <main className="login w-100 h-100">
            <form className="m-auto">
                <div className="head row">
                    <img src={logo} alt='logo' />
                    <h1>Admin</h1>
                </div>
            </form>
        </main>
    )
}
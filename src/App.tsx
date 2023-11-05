import "./App.css";

function App() {
    return (
        <>
            <div className="card">
                <p>{top?.location.href || "top is null"}</p>
                <p>{document.referrer || "referrer is null"}</p>
            </div>
        </>
    );
}

export default App;

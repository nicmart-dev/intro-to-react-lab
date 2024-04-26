// import logo from './logo.svg';
// import './App.css';
import './styles.css';
import { CardList, Header } from './components' //note with index.js no need to mention //it on import



function App() {
  return (
    <div className="App">
      <Header />
      <section class="hero">
        <div>
          <h2 class="hero__title">Hero Title</h2>
          <h3 class="hero__tagline">Tag Line</h3>
        </div>
      </section>
      <main>
        <CardList />
        <section class="activity-list">
          <div>
            <h3>Activity Feed</h3>
            <div class="activity-list__item">Activity</div>
            <div class="activity-list__item">Activity</div>
            <div class="activity-list__item">Activity</div>
            <div class="activity-list__item">Activity</div>
            <div class="activity-list__item">Activity</div>
            <div class="activity-list__item">Activity</div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <section class="footer footer--left">Left Footer</section>
        <section class="footer footer--center">Center Footer</section>
        <section class="footer footer--right">Right Footer</section>
      </footer>
      <script src="script.js"></script>
    </div>
  );
}

export default App;

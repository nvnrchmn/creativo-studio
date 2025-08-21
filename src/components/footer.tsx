export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} Creativo Studio. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a className="hover:underline underline-offset-4" href="#privacy">Privacy</a>
          <a className="hover:underline underline-offset-4" href="#terms">Terms</a>
          <a className="hover:underline underline-offset-4" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

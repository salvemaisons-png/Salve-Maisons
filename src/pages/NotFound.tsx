import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => (
  <Layout>
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="kicker text-primary mb-4">404</p>
      <h1 className="font-display text-4xl md:text-6xl font-bold">This room is empty</h1>
      <p className="mt-4 text-muted-foreground max-w-md">
        The page you're looking for doesn't exist. Let's get you back to somewhere restful.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
      >
        Back to home
      </Link>
    </section>
  </Layout>
);

export default NotFound;

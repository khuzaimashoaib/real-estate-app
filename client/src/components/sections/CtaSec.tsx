import { useAuth } from '@/src/context/AuthContext';
import Link from 'next/link';

const CtaSec = () => {
  const { user } = useAuth();
    
  return (
 <section
          className="py-20 px-6 text-center"
          style={{ background: "var(--primary-light)" }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Find Your{" "}
              <span style={{ color: "var(--gold)" }}>Dream Home?</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Join thousands of happy families who found their perfect home
              through binAdim.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href={user ? "/dashboard" : "/signup"}
                className="text-white font-semibold text-sm px-8 py-4 rounded-xl hover:opacity-90 transition"
                style={{ background: "var(--orange)" }}
              >
                Get Started Free
              </Link>
              <Link
                href="/properties"
                className="text-white font-medium text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition"
                style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </section>  )
}

export default CtaSec
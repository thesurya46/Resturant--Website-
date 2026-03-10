import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back to delicious food!
        </p>
        <Link to="/">
          <Button className="bg-orange-500 hover:bg-orange-600">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

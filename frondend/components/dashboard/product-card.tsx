"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, User, ShoppingCart, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

export interface Product {
  ai_table_identifier: string;
  product_id: string | null;
  date_sold: string | null;
  product_name: string | null;
  category: string | null;
  actual_price_inr: string | null;
  rating: string | null;
  about_product: string | null;
  user_name_usd: string | null;
  review_title: string | null;
  review_content: string | null;
  product_link: string | null;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return 'Invalid Date';
    }
  };

  const formatPrice = (price: string | null) => {
    if (!price) return 'N/A';
    return price.replace(/₹/, '₹ ');
  };

  const getRatingColor = (rating: string | null) => {
    if (!rating) return 'text-gray-400';
    const num = parseFloat(rating);
    if (num >= 4.5) return 'neon-cyan';
    if (num >= 4.0) return 'neon-blue';
    if (num >= 3.0) return 'neon-purple';
    return 'text-red-400';
  };

  const truncateText = (text: string | null, maxLength: number) => {
    if (!text) return 'N/A';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const getMainCategory = (category: string | null) => {
    if (!category) return 'Uncategorized';
    return category.split('|')[0] || 'Uncategorized';
  };

  return (
    <Card className="bg-gray-900/70 border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-semibold text-white leading-tight">
            {truncateText(product.product_name, 50)}
          </CardTitle>
          {product.product_link && (
            <a
              href={product.product_link}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-blue hover:glow-blue transition-all p-1 rounded"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-700">
            {getMainCategory(product.category)}
          </Badge>
          
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className={`w-4 h-4 ${getRatingColor(product.rating)} fill-current`} />
              <span className={`text-sm font-medium ${getRatingColor(product.rating)}`}>
                {product.rating}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Product Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 neon-cyan" />
            <span className="text-gray-300">
              {formatDate(product.date_sold)}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 neon-blue" />
            <span className="text-gray-300 font-medium">
              {formatPrice(product.actual_price_inr)}
            </span>
          </div>
          
          {product.user_name_usd && (
            <div className="flex items-center gap-2 col-span-2">
              <User className="w-4 h-4 neon-purple" />
              <span className="text-gray-300 text-xs">
                {product.user_name_usd.split(',')[0]}
              </span>
            </div>
          )}
        </div>

        {/* Product Description */}
        {product.about_product && (
          <div className="text-sm text-gray-400 leading-relaxed">
            <p className="text-xs font-medium text-gray-300 mb-1">About:</p>
            {truncateText(product.about_product, 120)}
          </div>
        )}

        {/* Review */}
        {product.review_title && (
          <div className="text-sm border-t border-gray-800 pt-3">
            <p className="text-xs font-medium neon-cyan mb-1">Latest Review:</p>
            <p className="text-gray-300 font-medium mb-1">
              {truncateText(product.review_title, 40)}
            </p>
            {product.review_content && (
              <p className="text-gray-400 text-xs">
                {truncateText(product.review_content, 80)}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}




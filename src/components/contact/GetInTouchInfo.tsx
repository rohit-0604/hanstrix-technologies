import { Mail, Phone, MapPin } from "lucide-react";

export const GetInTouchInfo = () => {
  return (
    <div className="pt-6 sm:pt-8 border-t border-slate-700 lg:pt-0 lg:border-t-0">
      <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-5 flex items-center gap-3 flex-nowrap">
        <span className="text-gradient-neonsubtle">Get in Touch Directly</span>
      </h2>

      <div className="space-y-5 text-foreground">
        {/* Email */}
        <div className="flex items-start gap-3">
          <Mail className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-medium text-base sm:text-lg text-white">Email Us</h3>
            <p className="text-sm sm:text-base text-muted-foreground">info@hanstrix.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <Phone className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-medium text-base sm:text-lg text-white">Call Us</h3>
            <p className="text-sm sm:text-base text-muted-foreground">+91 98765 43210</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-medium text-base sm:text-lg text-white">Our Office</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              123 AI Avenue, Innovation Park, Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

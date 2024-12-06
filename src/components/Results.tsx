import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Katie Melissa",
    role: "Instagram Influencer",
    image: "https://scale-brands-lab.s3.us-east-2.amazonaws.com/katie_melissa.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5PFFY5NLDREYFIAT%2F20241206%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241206T173052Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLWVhc3QtMiJHMEUCID726uo5tZWb8PPt9xjeN3hUIoCm8qa50O4amFeCYFanAiEA%2F6E5LGx3Dae8%2F%2FlROW6GsvBslZKQTwEFwFDyV5EKq2Aq7AIIMxAAGgw5MjU5MTMxMTU0NzgiDDZ3TDhCk3FXTpHkeyrJAlZBfDi0RE5omaNfbx4qnUGwP4vHEtJLjBW5iYPrt1YtLs69QMlMKlL%2FZOZuQpTcDAJ3JEV1r7cAejTcY6rqxuI1mTXvB7d2HBiHU5%2Fkb5pAZpbJbf3EZt9zasJyXGHN7A48ojievhwgHZZ8JEpWdMQ41tfSmuAO%2F2AIWId46v%2BIrKITWZ8TFAQjxNeIeO4FSHhUhLVL9Nlje6g5T8cpPZXPpsctVGDzUwh1TNGxe41fu9wbzQMNSv2BirfOUOhcfgLRn8cS4fVIsv7nr2wl6GyacE0BZCoQ1LK4vCWIk844Omq7zr1whPSSZv6cmWo%2FS0vvxLxR%2Bei8x8OMN5gvAlADFK%2FeHGcxVtkjXv4HzVyGZmeruLYdUeXflowF1m3pZJ7%2BoRYbTn9EFVGhy2rsSptl2e5REHWt8cEI0a7WKYMPPIG4Z3GzsGAbMJTGzLoGOrMCKS7CPm2wYvG26SVcUqMc7VvwY%2BViRm1i1wZU7tcd%2BoJlOCX9lt0hr0cUMfFiMRtzmVgR12dk1YbnSusTkAGdSANz84lvo5hc8Jw4qBVZNxIkDPchPE6yjSLRweNhqljGfyLIG20bHCHBcF4au%2FsPqZIz3b7m5MvewxTyPxg25vKPkMzvFNUJuwhnv3UZYPylba4Q9AT%2BDBlm318eP28BB%2BNK0gsrw1Lna3IyysB%2BhuYF1%2B1B6c5Mhyw0p6VWBHEdW%2BkPJTu5UHHOt8Tse1RkLVlmDHS07xFJumn7n639i27wfWfjWgglWI8NJHxEy%2F4MYS9FSaE2CKL6OrcL4IxHWYANI5z3Uwfb%2BVXNmmsp%2BwmBIYtfv4Msg%2Bg1R%2BZZ8F1ZBwuJrzgGGQvBWaNKgT33fV8QYg%3D%3D&X-Amz-Signature=8750d4e2237272258f1a72d349564ea19a567e34b51b4b682a5f30560fcc1625&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    content: "ScaleBrandsLab helped me reach 240k+ followers on Instagram. Their viral content formula really works!",
    stats: "240k+ Followers"
  },
  {
    name: "Mind Hustler",
    role: "Twitter Influencer",
    image: "https://scale-brands-lab.s3.us-east-2.amazonaws.com/mind_hustler.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5PFFY5NLEGA6KM4K%2F20241206%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241206T173241Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLWVhc3QtMiJHMEUCIQD%2Bhmks5%2BUiI90YWijo8Gal3GVmqC6J70CsTgeT1I2DDwIgSsaKayg78kHodsSBz8xQ%2BuD6HYzaft%2BlxwqTg0Eiycwq7AIIMxAAGgw5MjU5MTMxMTU0NzgiDHKz8K3Uj7vuiv70QSrJAoxssymHe3tWRY2l1a2vjdc%2Fn3oyJ2OT0WB0rFqbJGrOEKOqR1fWdsAd2jBDcvAuKgfiOWmhIjKka%2Bq2IhIsYmygOHEStT6nRlgcKt2t3wM%2F%2BBladzNvrSVQ0HfDrELxKMPH%2BVtME%2FBfYkdvATL35NF4WcjAdyvPAZ2y2L1z%2BY3sPcXxiP48A9HOEsdBDFQzDR73vIOtaFnkl0vGdPWXiLDFRRyZBsryv0xB%2BKZsFKGjMaFNjw60nun6DAGfIQwhZyItZCJZgAG0tyd5id52BFvcXn%2FitXpgDJZ7wVRBh%2FlsTUeY5If%2BsL%2FWcvddSd5gCg%2BdFphhTasvKNa0QyNZksvZKjAsHnr5MIrgbiEFyDcrAR37EcqAvbS1iBkmY2GCBCEGly2p3U29AJgYYNY4SI870T8uIMZZGiub%2FV5UnvqzPQvazoecdfaxMJTGzLoGOrMCVYnQYxFCaPJ6vaDH8SX7pLrYJTqRubTaMLHx3G3VZ8wUB5jC1Q%2FK5eR3Ds%2F%2FAavzAgKL9pKM9ewX3ys2yOd5DGF4eOkej7O7rLLVk%2B%2F6cW4Xw9De52%2BEAdpvHDwPoBVV7a9%2F2m4M0hzkAj1CUTKJfQZb26W43DwnQqfXAh%2F8%2FIhNxO4R30xFq1hUO1RhTWEXG7mYFPO87qPEDJq77ltgwEW7AcJn3SoSJkRn6CvrALj9DjLFcNYxhUu4W1NjTJ%2FmhFLkiqVkE50ceRkLDdLPweEavt56bcqr6PdZ8859mY1IRd3qjmBYJAN080wOXD6h07oVbPMtIBkowmodRgJfjTkqhnObVRdkD7Re%2BMkHEQtbIQqV3lVrr2RRbce23iQ9u8l3cLCI1SDB5jlY5qf31CsEHQ%3D%3D&X-Amz-Signature=93506127958a3e10bb45113af6c89971dff3f9a5f28c23601adb2a8da26095af&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    content: "Grew my Twitter following to 350k+ with their strategies. The engagement rates are incredible!",
    stats: "350k+ Followers"
  },
  {
    name: "Nutty Productions",
    role: "YouTube Creator",
    image: "https://scale-brands-lab.s3.us-east-2.amazonaws.com/nutty_productions.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5PFFY5NLD7IWMSR2%2F20241206%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241206T173342Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLWVhc3QtMiJIMEYCIQDFgPoxwz5wn9ACxpXkKA7g6oUzoYDfIRoF3BwtP0wOuQIhAOJz%2BUAwGepso6RMQercHlMFQvkY1i80eNyrrO67ECavKuwCCDMQABoMOTI1OTEzMTE1NDc4IgzCTNR9SVBMKc7jyGUqyQIJ8oCzrdHfGRQDb9gh22NmXjoZzHqOBaEYM%2FqzKVqMJobg3TzXyidqH%2BSk%2FE%2FI5vn3AkZItoGIho%2BnPl7LyGCGW3by7zqk59ho0LY6c7HOkDVSmY7zb4CFHjZhN0i6QXZ10v7Kd4bjNJ%2BgNe1ZjLz1xsgee0wYK%2BtUPJb8BBJLSyUg9bAQhtUrM7eNC64z7VTpOdeLIkISAXMJQNmM8qE1AknAGZHjVfEUjqvyDtNGpqwmEkczwkCOcn6p9LKe8FMw5mo1%2FOuUeZNm9SEIGVqHZqWPcrzuXZ6y15J8foXQPNJtvok8lPI8rY%2FHSrhGvV3sa7uNeSLRVBnrdujaS9h9IihC1xT7XOK6Gydl5NfFrQnv0Ysy9J3Yof6GsDrmQ5VOnKg8ki55%2BUi4u4y6UGuksrHY5KUMhKvw0qC7myI1pHOdUpiV4y7Q8DCUxsy6BjqyAnydoWj7ltwJQgsaQRoVqkJ60uVVMEc3ikFsLHjvUyLnNP5DQNYtkiNUEk1lf2cX2Jv9Yj%2Bnq9VyXOvb0CWAwxGsmteCjXp1Sj%2BHfMh4tdcpNWNeOI5ZewZbdZ4a5nYeEyeZ0nPw9foBGURw2SNf05Yip0ZMf0k5IVi2M2IUj8njlodWU8T1Xaka3JKOEv1W8DciZHNjuLbEPfXd3T5VbjaasW46IB6kJhpo5SKfaPN2WdiW6QOrwLPdurSvCrZjOtRzNKJteC4FXiWJw2F1vnHxsMndL%2FvISWUpsYzxwY3SXlSKBXyGZbxhjTD16vjhGiGXYJsJPzbORHN9MhOo%2F3ZrvSfT1bB4CvkaaINjSbLy%2BeDV3JTV6HPkZ4HdL8x7B2vq7OjXDspRd3jGssVodpJ%2BlQ%3D%3D&X-Amz-Signature=027689e6df08dd1075184dc32e5d5d6dc7add90838b1a86f03a5ff914ce23305&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    content: "Reached 600k+ subscribers on YouTube thanks to ScaleBrandsLab' content optimization techniques.",
    stats: "600k+ Subscribers"
  }
];

const chatScreenshots = [
  {
    message: "Just hit 100k followers this month! Your strategies are gold! 🚀",
    platform: "Instagram"
  },
  {
    message: "My latest video went viral, 1M views in 48 hours! Thank you! 🎉",
    platform: "YouTube"
  },
  {
    message: "The engagement rate has tripled since implementing your formula! 📈",
    platform: "Twitter"
  }
];

export default function Results() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our clients are crushing it with our viral content formula
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-600 font-semibold">{testimonial.stats}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Client Messages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chatScreenshots.map((chat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{chat.platform}</span>
                </div>
                <p className="text-gray-800">{chat.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
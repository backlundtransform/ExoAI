using Keras;
using Keras.Layers;
using Keras.Models;
using Microsoft.AspNetCore.Mvc;
using Numpy;

namespace ExoAI.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AIController : ControllerBase
    {
        
        [HttpGet(Name = "StartTraining")]
        public IActionResult StartTraining()
        {


            NDarray x = np.array(new float[,] { { 0, 0 }, { 0, 1 }, { 1, 0 }, { 1, 1 } });
            NDarray y = np.array(new float[] { 0, 1, 1, 0 });


            var model = new Sequential();
            model.Add(new Dense(32, activation: "relu", input_shape: new Shape(2)));
            model.Add(new Dense(64, activation: "relu"));
            model.Add(new Dense(1, activation: "sigmoid"));

            model.Compile(optimizer: "sgd", loss: "binary_crossentropy", metrics: new string[] { "accuracy" });
            model.Fit(x, y, batch_size: 2, epochs: 1000, verbose: 1);


            return Content(model.ToJson());

        }
    }
}
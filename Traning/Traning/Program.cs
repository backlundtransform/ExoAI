using Keras;
using Keras.Layers;
using Keras.Models;
using Numpy;

var x = np.array(new float[] { 1, 2, 3, 4,5,6,7,8,9});

var y = x+10;


var model = new Sequential();


model.Add(new Dense(1, input_shape: new Shape(1)));

var opt = new Keras.Optimizers.Adam((float)(0.1));

model.Compile(optimizer: opt, loss: "mae", metrics: new string[] { "mae" });
model.Fit(x, y,  epochs: 1000);

var value = model.Predict(np.array(10));

Console.ReadKey();

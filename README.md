# Object-detection-
Object Detection Application
This part of the project is a Python-based object detection system using the YOLOv5 framework. It includes scripts for training, inference, and model export.

Prerequisites
To set up the environment, install the required packages using the requirements.txt file.

Bash

pip install -r requirements.txt
Usage
1. Detection
Use the detect.py script to perform inference on images, videos, or streams.

Example Commands:

For a video:

Bash

python detect.py --weights yolov5s.pt --source vid.mp4
For an image:

Bash

python detect.py --weights yolov5s.pt --source img.jpg
For a webcam:

Bash

python detect.py --weights yolov5s.pt --source 0
2. Training
Use the train.py script to train a YOLOv5 model on a custom dataset.

Example Commands:

From a pretrained model (recommended):

Bash

python train.py --data coco128.yaml --weights yolov5s.pt --img 640
From scratch:

Bash

python train.py --data coco128.yaml --weights '' --cfg yolov5s.yaml --img 640
3. Export
Use the export.py script to convert a PyTorch model to various formats.

Example Commands:

Export to ONNX:

Bash

python export.py --weights yolov5s.pt --include onnx
Export to TensorRT:

Bash

python export.py --weights yolov5s.pt --include engine

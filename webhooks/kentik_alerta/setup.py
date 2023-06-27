from setuptools import find_packages, setup

version = '1.0.0'

setup(
    name="kentik-alerta",
    version=version,
    description="Alerta webhook for Kentik",
    url="http://localhost/",
    license="none",
    author="JC",
    author_email="packet@packet.com",
    packages=find_packages(),
    py_modules=["kentik_alerta"],
    install_requires=[],
    include_package_data=True,
    zip_safe=True,
    entry_points={"alerta.webhooks": ["kentik = kentik_alerta:kentikWebhook"]},
)
